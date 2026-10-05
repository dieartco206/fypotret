import React, { useState, useEffect } from 'react';
import type { PricingPackage, PortfolioItem } from '../data/portfolioData';
import { X, Send, Sparkles, Calendar, MapPin, User, Heart } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: PricingPackage | null;
  preselectedItem?: PortfolioItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPackage,
  preselectedItem,
}) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('Wisuda (Graduation)');
  const [packageChoice, setPackageChoice] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('Tangerang');
  const [notes, setNotes] = useState('');

  // Sync state if preselected values exist
  useEffect(() => {
    if (preselectedPackage) {
      setPackageChoice(preselectedPackage.title);
      if (preselectedPackage.category === 'graduation') setService('Wisuda (Graduation)');
      if (preselectedPackage.category === 'wedding') setService('Wedding & Akad');
      if (preselectedPackage.category === 'prewedding') setService('Prewedding');
      if (preselectedPackage.category === 'birthday') setService('Kids & Birthday');
    } else if (preselectedItem) {
      setPackageChoice(`Referensi Foto: ${preselectedItem.title}`);
      setService(preselectedItem.categoryLabel);
      if (preselectedItem.location.includes('Tangerang')) setLocation('Tangerang');
      else if (preselectedItem.location.includes('Depok')) setLocation('Depok');
      else if (preselectedItem.location.includes('Jakarta')) setLocation('Jakarta');
    }
  }, [preselectedPackage, preselectedItem]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct friendly WhatsApp Message
    const text = `Halo Admin FYPotret (@fypotretid)! ✨
Saya ingin konsultasi booking jadwal foto:

👤 Nama: ${name || 'Calon Klien'}
📸 Layanan: ${service}
📦 Pilihan Paket / Referensi: ${packageChoice || 'Belum Ditentukan'}
📅 Estimasi Tanggal: ${eventDate || 'Menyesuaikan Ketersediaan'}
📍 Lokasi Sesi: ${location}
📝 Catatan Tambahan: ${notes || '-'}

Mohon info ketersediaan slot tanggal dan prosedur bookingnya ya. Terima kasih! 🙏`;

    const encodedText = encodeURIComponent(text);
    // Standard phone link for FYPotret (WhatsApp)
    const waUrl = `https://wa.me/6281234567890?text=${encodedText}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full sm:max-w-lg bg-obsidian-900 border border-white/10 sm:rounded-2xl rounded-t-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10">
        
        {/* Close Button (Apple HIG 44x44px touch target) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/5"
          aria-label="Tutup Form Booking"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold mb-2 border border-gold-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Response WhatsApp</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Konsultasi & Cek Tanggal
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Isi detail singkat di bawah ini untuk terhubung langsung ke WhatsApp admin FYPotret.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Name Field */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold-400" />
              Nama Lengkap / Panggilan
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Nabila Putri"
              className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Service Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-gold-400" />
                Jenis Layanan
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="Wisuda (Graduation)">Wisuda (Graduation)</option>
                <option value="Wedding & Akad">Wedding & Akad</option>
                <option value="Prewedding">Prewedding</option>
                <option value="Kids & Birthday">Kids & Birthday</option>
                <option value="Event Dokumentasi">Event / Turnamen</option>
                <option value="Sesi Lainnya">Layanan Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Area Lokasi
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="Tangerang (Kota / Tangsel / Kab)">Tangerang Area</option>
                <option value="Depok">Depok Area</option>
                <option value="Jakarta (Selatan / Barat / Pusat / Timur / Utara)">Jakarta Area</option>
                <option value="Bogor / Bekasi">Bogor / Bekasi</option>
                <option value="Luar Jabodetabek">Luar Jabodetabek</option>
              </select>
            </div>
          </div>

          {/* Package Choice */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1.5">
              Pilihan Paket / Catatan Khusus
            </label>
            <input
              type="text"
              value={packageChoice}
              onChange={(e) => setPackageChoice(e.target.value)}
              placeholder="Contoh: Paket Graduation Squad / Wedding Akad"
              className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              Estimasi Tanggal Pemotretan
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1.5">
              Pertanyaan / Permintaan Khusus
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Misal: Rencana outdoor di kampus UI Depok bersama 5 teman..."
              className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-obsidian-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:brightness-110 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[48px] mt-6"
          >
            <Send className="w-4 h-4 fill-obsidian-950" />
            <span>Kirim Pesan ke WhatsApp FYPotret</span>
          </button>
        </form>

        <p className="text-[11px] text-zinc-500 text-center mt-4">
          Data Anda aman & langsung diteruskan ke aplikasi WhatsApp tanpa penyimpanan data privasi pihak ketiga.
        </p>

      </div>
    </div>
  );
};
