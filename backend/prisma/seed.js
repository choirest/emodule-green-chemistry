import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create Admin User
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@emodule.com' },
    update: {},
    create: {
      email: 'admin@emodule.com',
      nama: 'Admin E-Module',
      password: adminPassword,
      role: 'ADMIN',
    },
  });
  console.log('Created admin:', admin);

  // // Create Sample Student
  // const studentPassword = await bcrypt.hash('siswa123', 10);
  // const student = await prisma.user.upsert({
  //   where: { email: 'siswa@emodule.com' },
  //   update: {},
  //   create: {
  //     email: 'siswa@emodule.com',
  //     nama: 'Siswa',
  //     password: studentPassword,
  //     role: 'SISWA',
  //     kelas: 'X MIPA 1',
  //   },
  // });
  // console.log('Created student:', student);

  // Create Pretest Questions
  const pretestQuestions = [
    'Sebutkan dua komponen utama yang digunakan untuk membuat pupuk dari limbah organik berdasarkan bacaan!',
    'Apa hubungan yang dimiliki limbah organik dan mikroorganisme dalam bacaan? Jelaskan!',
    'Apa yang terjadi jika limbah organik dibiarkan tanpa diolah?',
    'Urutkan secara sederhana langkah umum dalam pembuatan pupuk organik dari limbah organik!',
    'Mengapa pengolahan limbah organik dianggap bagian dari daur ulang?',
    'Bagaimana manfaat umum pemanfaatan limbah organik bagi lingkungan?',
    'Selain mengurangi sampah, deskripsikan manfaat lain dari pemanfaatan sampah organik menjadi kompos!',
    'Menurut bacaan, apa dampak jangka panjang jika masyarakat terus membuang limbah organik tanpa pengolahan?',
    'Bagaimana proses daur ulang sampah organik dan anorganik membantu keberlanjutan planet bumi?',
    'Jelaskan bagaimana sistem pengelolaan sampah rumah tangga terkait dengan sistem masyarakat lokal dan global!',
    'Menurutmu, kebiasaan baru apa yang bisa mulai dilakukan keluarga di rumah untuk mengurangi ketergantungan pada tempat pembuangan akhir (TPA) melalui pemanfaatan sampah organik? Jelaskan alasannya!',
    'Sebagai individu, tindakan apa yang bisa dilakukan untuk mendukung proses daur ulang?',
    'Keterampilan apa yang perlu dimiliki untuk mendaur ulang sampah rumah tangga?',
    'Bagaimana kamu dapat bekerja sama dengan orang lain dalam pengelolaan sampah rumah tangga?',
    'Bagaimana kegiatan mendaur ulang sampah dapat membuat seseorang lebih peduli dan sadar terhadap lingkungan?'
  ];

  for (let i = 0; i < pretestQuestions.length; i++) {
    await prisma.soal.upsert({
      where: {
        jenisSoal_nomorSoal: {
          jenisSoal: 'PRETEST',
          nomorSoal: i + 1
        }
      },
      update: {},
      create: {
        jenisSoal: 'PRETEST',
        nomorSoal: i + 1,
        pertanyaan: pretestQuestions[i]
      }
    });
  }
  console.log('Created pretest questions');

  // Create Materi Questions
  const materiQuestions = [
    'Jadi Menurutmu apa itu Green Chemistry?'
  ];

  for (let i = 0; i < materiQuestions.length; i++) {
    await prisma.soal.upsert({
      where: {
        jenisSoal_nomorSoal: {
          jenisSoal: 'MATERI',
          nomorSoal: i + 1
        }
      },
      update: {},
      create: {
        jenisSoal: 'MATERI',
        nomorSoal: i + 1,
        pertanyaan: materiQuestions[i]
      }
    });
  }
  console.log('Created materi questions');

  // Create Kegiatan 1 Questions
  const kegiatan1Questions = [
    'Menurutmu mengapa sampah organik yang menumpuk dapat memicu terjadinya pemanasan global?',
    'Bagaimana cara menangani sampah sisa makanan yang kita hasilkan dalam kehidupan sehari-hari?',
    'Menurut kalian apakah sampah organik rumah tangga bisa dijadikan sebagai sediaan pupuk sehingga bisa menggantikan pupuk komersial?',
    'Tulislah hasil perolehan informasi pada kolom berikut!',
    'Dari hasil pengamatanmu, uraikan mengapa sampah organik rumah tangga dapat digunakan sebagai pupuk',
    'Dalam hal pembuatan pupuk dari bahan organik, berarti akan mengurangi penggunaan jumalh pupuk komersial yang dipakai petani, tuliskan prinsip green chemistry mana saja yang ada dalam pembuatan pupuk organik berbahan dasar rumah tangga ini!',
    'Buatlah kesimpulan dari paparan yang telah kamu tuliskan!',
    'Bagaimana pengalaman Anda dalam penyelesaian proyek ini? Apakah Anda menemukan kendala dan bagaimana Anda menyelesaikannya? Bagilah pengalaman, kesan, dan apa yang Anda pelajari dari pembelajaran ini?'
  ];

  for (let i = 0; i < kegiatan1Questions.length; i++) {
    await prisma.soal.upsert({
      where: {
        jenisSoal_nomorSoal: {
          jenisSoal: 'KEGIATAN1',
          nomorSoal: i + 1
        }
      },
      update: {},
      create: {
        jenisSoal: 'KEGIATAN1',
        nomorSoal: i + 1,
        pertanyaan: kegiatan1Questions[i]
      }
    });
  }
  console.log('Created kegiatan 1 questions');

  // Create Kegiatan 2 Questions
  const kegiatan2Questions = [
    'Gambarkan konsep mapping penggunaan sedotan kertas dan upload pada kolom dibawah ini!',
    'Menurut kalian apakah bisa membuat produk pengganti plastik yang bisa dimakan? Jelaskan alasanmu!',
    'Tuliskan sumber informasi yang kalian temukan dalam kolom berikut!',
    'Tulislah hasil perolehan informasi pada kolom berikut!',
    'Dari hasil pengamatanmu, uraikan bagaimana langkah membuat produk tersebut!',
    'Dalam hal pembuatan packaging yang ramah lingkungan, berarti akan mengurangi produksi sampah plastik, tuliskan prinsip green chemistry mana saja yang ada dalam pembuatan packaging ramah lingkungan ini!',
    'Buatlah kesimpulan dari paparan yang telah kamu tuliskan!',
    'Bagaimana pengalaman Anda dalam penyelesaian proyek ini? Apakah Anda menemukan kendala dan bagaimana Anda menyelesaikannya? Bagilah pengalaman, kesan, dan apa yang Anda pelajari dari pembelajaran ini?'
  ];

  for (let i = 0; i < kegiatan2Questions.length; i++) {
    await prisma.soal.upsert({
      where: {
        jenisSoal_nomorSoal: {
          jenisSoal: 'KEGIATAN2',
          nomorSoal: i + 1
        }
      },
      update: {},
      create: {
        jenisSoal: 'KEGIATAN2',
        nomorSoal: i + 1,
        pertanyaan: kegiatan2Questions[i]
      }
    });
  }
  console.log('Created kegiatan 2 questions');

  // Create Kegiatan 3 Questions
  const kegiatan3Questions = [
    'Lalu sebagai siswa apakah ada langkah sederhana yang bisa kita lakukan untuk mengurangi pencemaran air akibat penggunaan detergen atau cairan pembersih komersial lainnya?',
    'Tuliskan Hipotesismu dalam percobaan ini!',
    'Tuliskan alat yang dibutuhkan dalam praktikum ini!',
    'Tuliskan bahan yang dibutuhkan dalam praktikum ini!',
    'Tuliskan prosedur kerja dalam praktikum ini!',
    'Lakukan pemantauan terhadap bau dan warna (Day 1-5)!',
    'Uraikan perubahan bau dan warna pada kolom berikut!',
    'Uraikan prinsip green chemistry mana saja yang kamu guakan dalam pembuatan cairan pembersih ini!',
    'Buatlah kesimpulan dari paparan yang telah kamu tuliskan!',
    'Bagaimana pengalaman Anda dalam penyelesaian proyek ini? Apakah Anda menemukan kendala dan bagaimana Anda menyelesaikannya? Bagilah pengalaman, kesan, dan apa yang Anda pelajari dari pembelajaran ini? '
  ];

  for (let i = 0; i < kegiatan3Questions.length; i++) {
    await prisma.soal.upsert({
      where: {
        jenisSoal_nomorSoal: {
          jenisSoal: 'KEGIATAN3',
          nomorSoal: i + 1
        }
      },
      update: {},
      create: {
        jenisSoal: 'KEGIATAN3',
        nomorSoal: i + 1,
        pertanyaan: kegiatan3Questions[i]
      }
    });
  }
  console.log('Created kegiatan 3 questions');

  // Create Posttest Questions
  const posttestQuestions = [
    'Identifikasilah minimal 3 komponen yang terlibat dalam pembuatan cairan pembersih kulit jeruk dan jelaskan peran masing-masing!',
    'Jelaskan hubungan saling ketergantungan antar komponen dalam sistem pengolahan kulit jeruk dengan senyawa kimia didalamnya seperti air dan oksigen!',
    'Bagaimana pengaruh kadar air, gula, dan oksigen memengaruhi fermentasi cairan pembersih kulit jeruk?',
    'Gambarkan konsep mapping system thinking langkah pembuatan cairan pembersih dari kulit jeruk!',
    'Analisislah konsep mapping yang telah mengenai bagaimana pembuatan cairan pembersih kulit jeruk mencerminkan siklus alami!',
    'Analisislah manfaat pembuatan cairan pembersih kulit jeruk berdasar prinsip green chemistry!',
    'Analisis dampak tersembunyi jika sampah organik rumah tangga tidak didaur ulang, kaitkan dengan senyawa kimia berbahaya dan pemanasan global!',
    'Prediksi kondisi lingkungan jika seluruh rumah tangga membuat cairan pembersih kulit jeruk secara berkelanjutan selama 5 tahun!',
    'Analisislah bagaimana beralih dari pupuk anorganik ke pupuk organik mendukung keberlanjutan ekosistem dan kesehatan manusia!',
    'Jelaskan bagaimana penggunaan pupuk organik memengaruhi sistem pertanian lokal dan berdampak pada isu global seperti perubahan iklim!',
    'Analisis bagaimana penerapan sistem pengelolaan sampah organik berbasis rumah tangga (misalnya komposter rumah, eco-enzyme) dapat mempercepat transisi menuju masyarakat berkelanjutan, ditinjau dari aspek ekonomi, sosial, dan perubahan perilaku!',
    'Sebagai individu, analisislah tindakan apa yang bisa dilakukan untuk memanfaatkan limbah rumah tangga menjadi pupuk organik ramah lingkungan!',
    'Sebagai individu, analisislah keterampilan apa yang dibutuhkan untuk menghasilkan pupuk organik sesuai prinsip Green Chemistry!',
    'Bagaimana kamu dapat bekerja sama dengan masyarakat/petani agar penggunaan pupuk organik berhasil dan berkelanjutan?',
    'Analisislah praktik penggunaan pupuk organik dapat membentuk pola pikir masyarakat terhadap Green Chemistry dan keberlanjutan!'
  ];

  for (let i = 0; i < posttestQuestions.length; i++) {
    await prisma.soal.upsert({
      where: {
        jenisSoal_nomorSoal: {
          jenisSoal: 'POSTTEST',
          nomorSoal: i + 1
        }
      },
      update: {},
      create: {
        jenisSoal: 'POSTTEST',
        nomorSoal: i + 1,
        pertanyaan: posttestQuestions[i]
      }
    });
  }
  console.log('Created posttest questions');

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });