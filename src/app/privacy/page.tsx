'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: Shield },
    { id: 'collection', title: 'Pengumpulan Data', icon: Database },
    { id: 'usage', title: 'Penggunaan Data', icon: Eye },
    { id: 'protection', title: 'Perlindungan Data', icon: Lock },
    { id: 'rights', title: 'Hak Pengguna', icon: UserCheck }
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
              Privacy Policy
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-blue-600">RUDIANSYAH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
            Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
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
                    <Shield className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Ringkasan Kebijakan Privasi</h2>
                  </div>
                  
                  <div className="prose max-w-none space-y-4 text-gray-700">
                    <p>
                      Di <strong>RUDIANSYAH</strong>, kami menghargai privasi Anda dan berkomitmen 
                      untuk melindungi informasi pribadi yang Anda percayakan kepada kami. 
                      Kebijakan Privasi ini berlaku untuk semua layanan yang kami tawarkan 
                      dan menjelaskan praktik pengumpulan, penggunaan, dan perlindungan data kami.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                      <p className="font-semibold text-blue-800">Poin Penting:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-blue-700">
                        <li>Kami hanya mengumpulkan data yang diperlukan untuk layanan kami</li>
                        <li>Data Anda dilindungi dengan enkripsi dan keamanan berlapis</li>
                        <li>Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga</li>
                        <li>Anda memiliki kontrol penuh atas data pribadi Anda</li>
                      </ul>
                    </div>

                    <h3 className="text-lg font-semibold mt-6">Informasi yang Kami Kumpulkan</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Informasi Identifikasi:</strong> Nama, alamat email, nomor telepon</li>
                      <li><strong>Informasi Kontak:</strong> Alamat fisik, detail perusahaan</li>
                      <li><strong>Informasi Penggunaan:</strong> Data penggunaan layanan dan preferensi</li>
                      <li><strong>Informasi Teknis:</strong> Alamat IP, browser, dan informasi perangkat</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Data Collection Section */}
            {activeSection === 'collection' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Database className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Pengumpulan Data</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Metode Pengumpulan</h3>
                      <p>
                        <strong>RUDIANSYAH</strong> mengumpulkan informasi melalui berbagai metode:
                      </p>
                      <ul className="list-disc list-inside mt-3 space-y-2">
                        <li>Formulir kontak dan pendaftaran online</li>
                        <li>Komunikasi langsung (email, telepon, pertemuan)</li>
                        <li>Analisis penggunaan website dan layanan digital</li>
                        <li>Cookie dan teknologi pelacakan lainnya</li>
                        <li>Feedback dan survei kepuasan pelanggan</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Kategori Data</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Data Pribadi</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Nama lengkap</li>
                            <li>• Alamat email</li>
                            <li>• Nomor telepon</li>
                            <li>• Alamat fisik</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Data Profesional</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Nama perusahaan</li>
                            <li>• Jabatan</li>
                            <li>• Kebutuhan layanan</li>
                            <li>• Riwayat proyek</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="font-semibold text-yellow-800">Persetujuan Anda</p>
                      <p className="text-yellow-700 mt-1">
                        Dengan menggunakan layanan kami, Anda secara aktif memberikan persetujuan 
                        untuk pengumpulan data yang dijelaskan dalam kebijakan ini.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Data Usage Section */}
            {activeSection === 'usage' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Penggunaan Data</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tujuan Penggunaan Data</h3>
                      <p>
                        Data yang kami kumpulkan digunakan secara eksklusif untuk:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                            <div>
                              <strong>Penyediaan Layanan:</strong>
                              <p className="text-sm">Menjalankan dan mengelola layanan yang Anda minta</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                            <div>
                              <strong>Komunikasi:</strong>
                              <p className="text-sm">Menghubungi Anda terkait layanan dan update</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                            <div>
                              <strong>Penyempurnaan Layanan:</strong>
                              <p className="text-sm">Menganalisis dan meningkatkan kualitas layanan</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                            <div>
                              <strong>Kepatuhan Hukum:</strong>
                              <p className="text-sm">Memenuhi kewajiban hukum dan peraturan</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Batasan Penggunaan</h3>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="font-semibold text-red-800">Kami TIDAK AKAN PERNAH:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-red-700">
                          <li>Menjual data pribadi Anda kepada pihak ketiga</li>
                          <li> Menggunakan data untuk tujuan di luar layanan kami</li>
                          <li> Membagikan data tanpa persetujuan eksplisit Anda</li>
                          <li> Menyimpan data lebih lama dari yang diperlukan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Data Protection Section */}
            {activeSection === 'protection' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lock className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Perlindungan Data</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Langkah Keamanan Kami</h3>
                      <p>
                        <strong>RUDIANSYAH</strong> menerapkan berbagai langkah keamanan untuk melindungi data Anda:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Enkripsi</h4>
                          <p className="text-sm">Data dienkripsi selama transmisi dan penyimpanan</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Akses Terbatas</h4>
                          <p className="text-sm">Hanya personil berwenang yang dapat mengakses data</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <Database className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Backup Aman</h4>
                          <p className="text-sm">Backup rutin dengan keamanan berlapis</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Standar Industri</h3>
                      <p>
                        Kami mematuhi standar keamanan industri terbaik termasuk:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>ISO 27001 Information Security Management</li>
                        <li>General Data Protection Regulation (GDPR) principles</li>
                        <li>Best practices cybersecurity frameworks</li>
                        <li>Regular security audits and penetration testing</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p className="font-semibold text-blue-800">Pembaruan Keamanan</p>
                      <p className="text-blue-700 mt-1">
                        Kami secara rutin memperbarui sistem dan protokol keamanan kami 
                        untuk menghadapi ancaman yang terus berkembang.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* User Rights Section */}
            {activeSection === 'rights' && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <UserCheck className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">Hak Pengguna</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Hak Anda Sebagai Pengguna</h3>
                      <p>
                        Sebagai pengguna layanan <strong>RUDIANSYAH</strong>, Anda memiliki hak-hak berikut:
                      </p>
                      <div className="space-y-4 mt-4">
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold">Hak Akses</h4>
                          <p className="text-sm">Meminta salinan data pribadi yang kami simpan tentang Anda</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold">Hak Koreksi</h4>
                          <p className="text-sm">Memperbaiki data yang tidak akurat atau tidak lengkap</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold">Hak Penghapusan</h4>
                          <p className="text-sm">Meminta penghapusan data pribadi Anda dalam kondisi tertentu</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold">Hak Pembatasan</h4>
                          <p className="text-sm">Membatasi pengolahan data pribadi Anda</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold">Hak Portabilitas</h4>
                          <p className="text-sm">Memindahkan data Anda ke layanan lain</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Cara Menjalankan Hak Anda</h3>
                      <p>
                        Untuk menjalankan hak-hak Anda, silakan hubungi kami melalui:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-3">
                        <ul className="space-y-2">
                          <li><strong>Email:</strong> privacy@rudiansyah.com</li>
                          <li><strong>Telepon:</strong> +6282382466214</li>
                          <li><strong>Alamat:</strong> JL.IR.SUTAMI, Karang Asam Ulu, Sungai Kunjang, Samarinda</li>
                        </ul>
                      </div>
                      <p className="text-sm mt-3">
                        Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p className="font-semibold text-green-800">Komitmen Kami</p>
                      <p className="text-green-700 mt-1">
                        Kami berkomitmen untuk memproses semua permintaan hak pengguna 
                        dengan transparan, adil, dan sesuai dengan peraturan yang berlaku.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Pertanyaan dan Kontak</h3>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin 
                  menjalankan hak-hak Anda, jangan ragu untuk menghubungi kami:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Email Privasi</h4>
                    <p className="text-blue-600">privacy@rudiansyah.com</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Kontak Utama</h4>
                    <p className="text-blue-600">+6282382466214</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}