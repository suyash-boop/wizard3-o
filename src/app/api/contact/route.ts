export async function POST(req: Request) {
  const data = await req.json()
  const { name, email, subject, message } = data

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return new Response('Webhook URL not configured', { status: 500 })
  }

  const discordMessage = {
    embeds: [{
      title: '📬 New Contact Form Submission',
      color: 0x0099ff,
      fields: [
        { name: '👤 Name', value: name, inline: true },
        { name: '📧 Email', value: email, inline: true },
        { name: '📝 Subject', value: subject },
        { name: '💬 Message', value: message }
      ],
      timestamp: new Date().toISOString()
    }]
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage)
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Discord')
    }

    return new Response('Message sent successfully', { status: 200 })
  } catch (error) {
    return new Response('Failed to send message', { status: 500 })
  }
}