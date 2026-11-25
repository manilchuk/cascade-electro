import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { phone, name, message } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram config missing" },
        { status: 500 },
      );
    }

    let text = `🔔 <b>Нова заявка!</b>\n\n📞 Телефон/Email: ${phone}`;
    if (name) text += `\n👤 Ім'я: ${name}`;
    if (message) text += `\n💬 Повідомлення: ${message}`;

    const workerUrl = "https://ancient-bush-349d.manilchuk-v.workers.dev";
    const url = `${workerUrl}/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Telegram error:", data);
      return NextResponse.json(
        { error: "Failed to send message", details: data },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
