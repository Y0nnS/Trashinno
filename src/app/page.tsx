import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section
        className="min-h-[60vh] bg-cover bg-[center_85%] relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Yuk Mulai Memilah Sampah dari Sekarang! 🌍
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto">
            Kebersihan dimulai dari rumah: pisahkan sampah organik, anorganik, dan berbahaya untuk bumi yang lebih baik.
          </p>
          <Link href="#pelajari-lebih">
            <div className="mt-6 inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm md:text-md transition shadow">
              Pelajari Lebih Lanjuts
            </div>
          </Link>
        </div>
      </section>

      {/* Edukasi Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-lg md:text-2xl font-bold text-green-700 mb-4">
          Mengelola Sampah Itu Penting 🌱
        </h2>
        <p className="text-sm md:text-lg mb-8 text-gray-700">
          Yuk mulai gaya hidup berkelanjutan dengan memisahkan sampah organik, anorganik, dan B3 (Bahan Berbahaya & Beracun). Kecil tapi berdampak besar!
        </p>
        <Link href="/auth/register">
          <div className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition text-sm">
            Bergabung Sekarang
          </div>
        </Link>
      </section>

      {/* Tipe Sampah */}
      <section
        id="pelajari-lebih"
        className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "♻️ Sampah Organik",
            desc: "Sisa makanan, daun, dan bahan alami lainnya. Dapat dikomposkan untuk menyuburkan tanah.",
          },
          {
            title: "🧴 Sampah Anorganik",
            desc: "Termasuk plastik, logam, dan kaca. Bisa didaur ulang untuk mengurangi limbah.",
          },
          {
            title: "☠️ Sampah B3",
            desc: "Baterai, obat, elektronik rusak. Harus dikelola khusus agar tidak membahayakan lingkungan.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-md">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Jenis Sampah yang Didaur Ulang */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-green-800">Jenis Sampah</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-lg">
            Lihat semua jenis sampah yang dapat didaur ulang.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { icon: "📄", label: "Kertas", link: "./pages/database-sampah/sampah/kertas" },
            { icon: "🧴", label: "Plastik", link: "./pages/database-sampah/sampah/plastik" },
            { icon: "🥫", label: "Aluminium", link: "./pages/database-sampah/sampah/aluminium" },
            { icon: "🛠️", label: "Besi & Logam", link: "./pages/database-sampah/sampah/besi" },
            { icon: "💻", label: "Elektronik", link: "./pages/database-sampah/sampah/elektronik" },
            { icon: "🍾", label: "Botol Kaca", link: "./pages/database-sampah/sampah/kaca" },
            { icon: "🍂", label: "Khusus", link: "./pages/database-sampah/sampah/khusus" },
          ].map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition p-6 flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Tambahan */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Siap Jadi Bagian dari Perubahan?</h2>
        <p className="mb-6">Gabung bersama kami untuk masa depan yang lebih bersih dan sehat 🌿</p>
        <Link href="/auth/register">
          <div className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition">
            Daftar Sekarang
          </div>
        </Link>
      </section>
    </main>
  );
}
