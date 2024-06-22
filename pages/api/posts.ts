/* eslint-disable @typescript-eslint/no-explicit-any */
export default function handler(_req: any, res: any) {
  res.status(200).json([
    {
      img: 'https://lh3.googleusercontent.com/p/AF1QipP1X9w0PVeWzZ3iGtIcr0Pt8TT66rPQ82YNHAEE=s680-w680-h510',
      date: new Date('2022-03-01T11:30:32.601Z'),
      content: `🎉🥤 Double the Tea, Double the Love 🥤🎉
        Share the love with our free tea giveaway!
        We're giving away FREE Bubble Tea for you and a friend! 👫✨
        Follow us @BobaJoy on Instagram.
        Good luck! When you win, come to Boba Joy with your friend to receive your 2 cups of tea! 🍃✨`,
    },
    {
      img: 'https://lh3.googleusercontent.com/p/AF1QipN3csXPB2mWf41XVrtRbSfcIu4FpJmZjtejd7fv=s680-w680-h510',
      date: new Date('2022-03-01T11:30:32.601Z'),
      content: `Join us for a vibrant Rainbow Party at Boba Bliss!

🌈 Where: Boba Bliss Trondheim
Get ready to taste the rainbow! Purchase any large drink and receive a special surprise gift with a chance to win fantastic prizes in our lucky draw.`,
    },
    {
      img: 'https://lh3.googleusercontent.com/p/AF1QipPZuzZAbDuPQzJyQBTMq4VP1e0BrOcbAbTK4NLQ=s680-w680-h510',
      date: new Date('2022-03-01T11:30:32.601Z'),
      content:
        `🎉 GIVEAWAY ALERT! 🎉

🌟 Celebrating 1000 Followers on Instagram! 🌟

Join our exciting giveaway to celebrate reaching 1000 followers on Instagram! 🥳 Purchase a LARGE-sized bubble tea to get a special ticket for our lucky draw and a chance to win amazing prizes! 🎉 Don't miss out!`,
    },
  ]);
}
