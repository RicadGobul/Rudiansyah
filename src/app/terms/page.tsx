'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: FileText },
    { id: 'services', title: 'Layanan', icon: Shield },
    { id: 'responsibilities', title: 'Tanggung Jawab', icon: Users },
    { id: 'limitations', title: 'Batasan', icon: AlertTriangle },
    { id: 'termination', title: 'Pengakhiran', icon: CheckCircle },
    { id: 'disputes', title: 'Sengketa', icon: Gavel }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="RUDIANSYAH" className="h-8 w-8 rounded-lg" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  RUDIANSYAH
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Terms & Conditions
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan <span className="text-blue-600">RUDIANSYAH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Syarat dan ketentuan ini mengatur penggunaan layanan yang disediakan oleh 
            RUDIANSYAH. Dengan menggunakan layanan kami, Anda menyetujui syarat ini.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Navigasi Cepat</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Ringkasan Syarat dan Ketentuan</h2>
                  </div>
                  
                  <div className="prose max-w-none space-y-4 text-gray-700">
                    <p>
                      Selamat datang di <strong>RUDIANSYAH</strong>. Syarat dan Ketentuan ini 
                      ("Syarat") mengatur penggunaan layanan profesional yang kami tawarkan. 
                      Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat 
                      oleh Syarat ini.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                      <p className="font-semibold text-blue-800">Poin Penting:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-blue-700">
                        <li>Layanan kami disediakan "sebagaimana adanya" dengan standar profesional tertinggi</li>
                        <li>Anda bertanggung jawab untuk memberikan informasi yang akurat</li>
                        <li>Kami berhak mengubah syarat dan ketentuan sewaktu-waktu</li>
                        <li>Hubungan profesional diharapkan dari kedua belah pihak</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Informasi Kontak</h3>
                      <p className="text-sm">
                        Untuk pertanyaan tentang Syarat dan Ketentuan ini, hubungi:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li><strong>Email:</strong> legal@rudiansyah.com</li>
                        <li><strong>Telepon:</strong> +6282382466214</li>
                        <li><strong>Alamat:</strong> JL.IR.SUTAMI, Karang Asam Ulu, Sungai Kunjang, Samarinda</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Services Section */}
            {activeSection === 'services' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Layanan</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Deskripsi Layanan</h3>
                      <p>
                        <strong>RUDIANSYAH</strong> menyediakan berbagai layanan profesional termasuk:
                      </p>
                      <ul className="list-disc list-inside mt-3 space-y-2">
                        <li>Konsultasi bisnis dan strategi</li>
                        <li>Manajemen proyek profesional</li>
                        <li>Solusi digital dan teknologi</li>
                        <li>Pengembangan bisnis dan analisis pasar</li>
                        <li>Optimasi operasional</li>
                        <li>Layanan konsultasi khusus lainnya</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Standar Layanan</h3>
                      <p>
                        Kami berkomitmen untuk:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800">Kualitas</h4>
                          <p className="text-sm">Menyediakan layanan dengan standar profesional tertinggi</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800">Ketepatan Waktu</h4>
                          <p className="text-sm">Menyelesaikan proyek sesuai timeline yang disepakati</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800">Konfidensialitas</h4>
                          <p className="text-sm">Melindungi informasi klien dengan ketat</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800">Transparansi</h4>
                          <p className="text-sm">Memberikan informasi yang jelas dan terbuka</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="font-semibold text-yellow-800">Perubahan Layanan</p>
                      <p className="text-yellow-700 mt-1">
                        Kami berhak untuk memodifikasi atau menghentikan layanan sewaktu-waktu 
                        dengan pemberitahuan yang wajar kepada klien yang terpengaruh.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Responsibilities Section */}
            {activeSection === 'responsibilities' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Tanggung Jawab</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tanggung Jawab Klien</h3>
                      <p>
                        Sebagai klien <strong>RUDIANSYAH</strong>, Anda bertanggung jawab untuk:
                      </p>
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Informasi Akurat:</strong>
                            <p className="text-sm">Memberikan informasi yang benar, lengkap, dan terkini</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Kolaborasi:</strong>
                            <p className="text-sm">Bekerja sama secara aktif dalam pelaksanaan proyek</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Pembayaran:</strong>
                            <p className="text-sm">Melakukan pembayaran sesuai dengan kesepakatan</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Komunikasi:</strong>
                            <p className="text-sm">Memberikan feedback dan komunikasi yang jelas</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tanggung Jawab Kami</h3>
                      <p>
                        <strong>RUDIANSYAH</strong> bertanggung jawab untuk:
                      </p>
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Profesionalisme:</strong>
                            <p className="text-sm">Menyediakan layanan dengan standar profesional tertinggi</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Konfidensialitas:</strong>
                            <p className="text-sm">Melindungi semua informasi klien dengan ketat</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Laporan:</strong>
                            <p className="text-sm">Memberikan laporan kemajuan secara berkala</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <strong>Dukungan:</strong>
                            <p className="text-sm">Memberikan dukungan teknis dan konsultasi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Limitations Section */}
            {activeSection === 'limitations' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertTriangle className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Batasan dan Pengecualian</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Batasan Tanggung Jawab</h3>
                      <p>
                        <strong>RUDIANSYAH</strong> tidak bertanggung jawab atas:
                      </p>
                      <ul className="list-disc list-inside mt-3 space-y-2">
                        <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                        <li>Kehilangan data atau informasi yang disebabkan oleh pihak ketiga</li>
                        <li>Kegagalan sistem yang disebabkan oleh faktor di luar kendali kami</li>
                        <li>Keputusan bisnis yang dibuat berdasarkan rekomendasi kami</li>
                        <li>Keterlambatan yang disebabkan oleh klien atau pihak ketiga</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Force Majeure</h3>
                      <p>
                        Kami tidak bertanggung jawab atas kegagalan atau keterlambatan dalam 
                        melaksanakan kewajiban kami jika disebabkan oleh:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-3">
                        <ul className="space-y-1 text-sm">
                          <li>• Bencana alam (gempa bumi, banjir, badai)</li>
                          <li>• Perang, terorisme, atau kerusuhan sipil</li>
                          <li>• Pandemi atau wabah penyakit</li>
                          <li>• Pemogokan atau aksi industrial</li>
                          <li>• Kegagalan infrastruktur umum</li>
                          <li>• Tindakan pemerintah atau peraturan yang berlaku</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <p className="font-semibold text-red-800">Batasan Ganti Rugi</p>
                      <p className="text-red-700 mt-1">
                        Tanggung jawab maksimal kami terbatas pada jumlah yang telah dibayar 
                        oleh klien untuk layanan spesifik yang menjadi sengketa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Termination Section */}
            {activeSection === 'termination' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Pengakhiran Layanan</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Pengakhiran oleh Klien</h3>
                      <p>
                        Klien dapat mengakhiri layanan dengan:
                      </p>
                      <ul className="list-disc list-inside mt-3 space-y-2">
                        <li>Pemberitahuan tertulis minimal 30 hari sebelumnya</li>
                        <li>Pelunasan semua pembayaran yang belum dibayar</li>
                        <li>Pengembalian semua properti milik <strong>RUDIANSYAH</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Pengakhiran oleh RUDIANSYAH</h3>
                      <p>
                        Kami dapat mengakhiri layanan jika:
                      </p>
                      <ul className="list-disc list-inside mt-3 space-y-2">
                        <li>Klien melanggar syarat dan ketentuan</li>
                        <li>Pembayaran tidak dilakukan sesuai kesepakatan</li>
                        <li>Ada pelanggaran hukum atau etika profesional</li>
                        <li>Kerjasama tidak lagi menguntungkan bagi kedua belah pihak</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Efek Pengakhiran</h3>
                      <p>
                        Setelah pengakhiran:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold">Kewajiban Keuangan</h4>
                          <p className="text-sm">Semua pembayaran yang belum lunas harus diselesaikan</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold">Data dan Dokumen</h4>
                          <p className="text-sm">Data klien akan dikembalikan dalam format yang disepakati</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p className="font-semibold text-blue-800">Pengakhiran Sepihak</p>
                      <p className="text-blue-700 mt-1">
                        Pengakhiran tidak mempengaruhi hak dan kewajiban yang telah timbul 
                        sebelum tanggal pengakhiran berlaku.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Disputes Section */}
            {activeSection === 'disputes' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Gavel className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Penyelesaian Sengketa</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Prosedur Penyelesaian</h3>
                      <p>
                        Jika terjadi sengketa antara <strong>RUDIANSYAH</strong> dan klien:
                      </p>
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start space-x-3">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <strong>Negosiasi Langsung:</strong>
                            <p className="text-sm">Upaya penyelesaian melalui diskusi langsung antara pihak-pihak terkait</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <strong>Mediasi:</strong>
                            <p className="text-sm">Jika negosiasi gagal, kedua belah pihak setuju untuk mediasi dengan mediator netral</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <strong>Arbitrase:</strong>
                            <p className="text-sm">Sebagai langkah terakhir, sengketa akan diselesaikan melalui arbitrase yang mengikat</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Yurisdiksi</h3>
                      <p>
                        Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. 
                        Sengketa apa pun akan diselesaikan dalam yurisdiksi pengadilan di:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-3">
                        <p className="font-semibold">Pengadilan Negeri Samarinda</p>
                        <p className="text-sm">Kota Samarinda, Provinsi Kalimantan Timur</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Biaya Penyelesaian</h3>
                      <p>
                        Biaya yang terkait dengan penyelesaian sengketa (mediasi, arbitrase, 
                        atau pengadilan) akan dibagi secara adil antara kedua belah pihak, 
                        kecuali jika ditentukan lain dalam keputusan akhir.
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p className="font-semibold text-green-800">Komitmen Penyelesaian</p>
                      <p className="text-green-700 mt-1">
                        Kedua belah pihak berkomitmen untuk menyelesaikan sengketa secara 
                        profesional dan menjaga hubungan bisnis yang baik.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Final Agreement */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Kesepakatan Akhir</h3>
                <p className="text-gray-700 mb-4">
                  Dengan menggunakan layanan <strong>RUDIANSYAH</strong>, Anda mengakui bahwa 
                  Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan 
                  Ketentuan ini.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800">Informasi Kontak</p>
                  <p className="text-blue-700 mt-1">
                    Untuk pertanyaan lebih lanjut tentang Syarat dan Ketentuan ini, 
                    silakan hubungi kami di legal@rudiansyah.com atau +6282382466214.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}