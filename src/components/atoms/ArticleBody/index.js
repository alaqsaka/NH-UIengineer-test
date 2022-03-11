import React from "react";
import DaftarIsi from "../DaftarIsi";
import {
  Container,
  SmallText,
  BigText,
  BulletPoint,
} from "./ArticleBodyStyles";

export default function ArticleBody(props) {
  return (
    <Container>
      <SmallText>
        Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman
        yang tepat!
        <br />
        <br />
        IP hosting adalah barisan angka sebagai identitas unik dari suatu
        hosting website. Dengan IP tersebut, website Anda dapat dikenali dan
        diakses melalui jaringan internet.
        <br />
        <br />
        Saat Anda mengakses website, Anda memang tidak bisa melihat IP secara
        langsung. Alasannya, IP tersebut sudah diwakili oleh sebuah domain agar
        lebih mudah diingat.
        <br />
        <br />
        Kalau begitu, bagaimana cara mengetahui hosting IP suatu website? Yuk,
        simak panduan lengkap cara cek IP web hosting di bawah ini!
      </SmallText>

      <DaftarIsi />
      <BigText>Cara Cek IP Hosting</BigText>

      <SmallText>
        Anda dapat melakukan cek IP hosting dengan berbagai cara, diantaranya
        adalah:
      </SmallText>
      <BulletPoint>
        • Melihat IP Hosting pada Email Informasi Akun Hosting
      </BulletPoint>
      <BulletPoint>
        • Melihat IP Hosting Melalui Member Area Niagahoster
      </BulletPoint>
      <BulletPoint>• Melihat IP Hosting Melalui cPanel</BulletPoint>
      <BulletPoint>• Mengecek IP Menggunakan CMD</BulletPoint>
      <BulletPoint>• Mengecek IP dengan Web-based Tools</BulletPoint>
      <SmallText>Nah, berikut ini penjelasan lengkapnya:</SmallText>

      <BigText>1. Melihat IP Hosting pada Email Informasi Akun Hosting</BigText>
      <SmallText>
        Ketika Anda membeli layanan hosting, pihak penyedia hosting akan <br />
        mengirimkan email berupa informasi detail akun hosting Anda. Pada email
        ini, <br />
        Anda bisa cek IP di bagian Informasi Akun seperti ini:
      </SmallText>
      <BigText>Kesimpulan</BigText>
      <SmallText>
        Nah, itu dia beberapa cara yang bisa Anda coba untuk mengecek hosting IP{" "}
        <br />
        website. Mulai dari melihat IP pada email yang dikirimkan ketika Anda{" "}
        <br />
        berhasil melakukan order hosting hingga cek IP hosting dengan bantuan{" "}
        <br />
        aplikasi website.
        <br />
        <br />
        IP hosting merupakan deretan angka yang tentu sulit untuk diingat.
        Itulah <br />
        kenapa penggunaan domain website bisa solusi terbaik demi kemudahan.{" "}
        <br />
        Namun, pastikan nama domain terbaik yang digunakan, ya. <br />
        <br />
        <br />
        Untungnya, Anda bisa membeli domain unik dengan mudah dari penyedia
        hosting di Indonesia seperti Niagahoster. <br />
        Bahkan, di Niagahoster, Anda bisa mendapatkan domain gratis jika <br />
        berlangganan hosting di hampir semua paket yang ditawarkan dengan durasi
        <br /> tertentu.
        <br />
        <br />
        <br />
        Tak hanya itu, Anda bisa juga menambahkan banyak domain pada akun <br />
        hosting Anda berkat fitur Unlimited Addon Domain. Itu pun masih ditambah{" "}
        <br />
        dengan SSL gratis yang bisa digunakan untuk menjaga keamanan website{" "}
        <br />
        Anda. <br />
        <br />
        <br />
        Menariknya, semua layanan tersebut bisa Anda dapatkan dengan harga mulai{" "}
        <br />
        dari Rp21rb/bulan saja. Harga yang cukup murah untuk fitur canggih dan{" "}
        <br />
        layanan berkualitas, bukan? <br />
        <br />
        <br />
        Jadi, tunggu apa lagi? Yuk, dapatkan domain gratis dengan berlangganan
        web hosting Niagahoster sekarang!
      </SmallText>
    </Container>
  );
}
