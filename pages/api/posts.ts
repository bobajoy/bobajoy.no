/* eslint-disable @typescript-eslint/no-explicit-any */
export default function handler(_req: any, res: any) {
  res.status(200).json([
    {
      img: 'https://lh3.googleusercontent.com/geougc/AF1QipP0hd2N0qp2aSq3frIYVUfDTRD3bLvnzJgFYTG6=h305-no',
      date: new Date('2022-03-01T11:30:32.601Z'),
      content:
        'Velkommen til Midtbyen, Boba Joy Trondheim !  Boble-te utvalget i Midtbyen vokser seg stadig større, og for kun to uker siden åpnet denne sjarmerende Kaféen i Olav Tryggvasons gate 1. I tillegg til herlig boble te i et stort utvalg av smaker selges det også asiatiske snacks, nudler og brus her. Tag noen som burde bli med deg hit i kommentarfeltet! 😉',
    },
    {
      img: 'https://lh3.googleusercontent.com/geougc/AF1QipN7pDc7noCDrzj2sLnlxzc9Pzl_w69M52uRQ3lN=h305-no',
      date: new Date('2022-03-01T11:30:32.601Z'),
      content: `Bestilling online er nå tilgjengelig📲🖥
    Vi håper dere bestiller på vår nettside og henter i butikken. Det er enkelt og dere slipper å vente! Har dere spørsmål eller trenger bistand for å bestille ta kontakt med oss på epost for vår assistanse.
    🌿ONLINE ORDER SYSTEM🌿
    📲bobajoy.no
    💌bobajoytrondheim@gmail.com
    📷 Tag us in your photos #bobajoy.no to get a free boba every week.`,
    },
  ]);
}
