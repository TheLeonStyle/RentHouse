import { BOT_TOKEN, CHAT_ID } from '$env/static/private';

export async function POST({ request }) {
	try {
		const { name, contact, message } = await request.json();

		const text = [
			name ? `<b>Имя:</b> ${name}` : '',
			contact ? `<b>Контакт:</b> ${contact}` : '',
			message ? `<b>Сообщение:</b> ${message}` : ''
		]
			.filter(Boolean)
			.join('\n');

		const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })
		});

		if (!res.ok) {
			console.error('Telegram API error:', await res.text());
			return new Response('Ошибка при отправке в Telegram', { status: 500 });
		}

		return new Response(null, { status: 204 });
	} catch (err) {
		console.error(err);
		return new Response('Server error', { status: 500 });
	}
}
