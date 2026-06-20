export const emailTemplates = {
  ticketPayment: (movieName: string, seatCode: string, date: string, paymentLink: string) => `
    <h1>Pembayaran Tiket Film: ${movieName}</h1>
    <p>Kursi: ${seatCode}</p>
    <p>Jadwal: ${date}</p>
    <p>Silahkan lakukan pembayaran melalui link berikut: <a href="${paymentLink}">Bayar Sekarang</a></p>
  `,
  ticketPayed: (movieName: string, seatCode: string, date: string) => `
    <h1>Tiket Berhasil Dibayar!</h1>
    <p>Selamat menonton film <strong>${movieName}</strong>.</p>
    <p>Kursi: ${seatCode}</p>
    <p>Jadwal: ${date}</p>
  `
};