# Telegram delivery setup

The contact form sends one structured message with name, company, phone, email, object type and task through `src/app/api/lead/route.ts`.

## Required server variables

Set these in Vercel under **Project Settings → Environment Variables** for Production, Preview and Development:

- `TELEGRAM_BOT_TOKEN` — the bot token from BotFather.
- `TELEGRAM_CHAT_ID` — the numeric ID of the private chat or group receiving leads.

Do not put either value in client-side code and do not prefix it with `NEXT_PUBLIC_`.

## Getting the chat ID

1. Open the bot in Telegram and send `/start`.
2. Open `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates` in a private browser window.
3. Find `message.chat.id` in the response and use that number as `TELEGRAM_CHAT_ID`.
4. Delete the token from the browser history after setup.
5. Redeploy the Vercel project after adding or changing variables.

For a group, add the bot to the group, send a message that mentions the bot, and use that group's negative `chat.id`.

## If the form shows a delivery error

The production deployment must contain both variables in the **same Vercel project** that serves the website. Adding them to a local `.env.local` file does not configure the deployed site.

1. Confirm `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` exist for the **Production** environment.
2. Make sure the bot has received `/start` from the destination private chat, or has permission to post in the destination group.
3. Trigger a new production deployment after every variable change.
4. Open `/api/lead` only through a POST request from the form. A delivery failure returns a safe error code such as `not_configured`, `chat_not_found`, `invalid_token`, or `network_error`; the token is never returned.

Telegram and the optional `LEAD_WEBHOOK_URL` are independent delivery channels. A failure in the optional webhook no longer turns a successful Telegram delivery into a form error.
