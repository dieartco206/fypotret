import React, { useState, useEffect } from 'react';
import type { PricingPackage, PortfolioItem } from '../data/portfolioData';
import { X, Camera, Calendar, MapPin, User, Heart, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

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
  const [service, setService] = useState('Wisuda');
  const [packageChoice, setPackageChoice] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('Tangerang');
  const [notes, setNotes] = useState('');

  // Sync state if preselected values exist
  useEffect(() => {
    if (preselectedPackage) {
      setPackageChoice(`${preselectedPackage.title} (${preselectedPackage.price})`);
      if (preselectedPackage.category === 'graduation') setService('Wisuda');
      if (preselectedPackage.category === 'wedding') setService('Wedding');
      if (preselectedPackage.category === 'prewedding') setService('Prewedding');
      if (preselectedPackage.category === 'birthday') setService('Birthday');
      if (preselectedPackage.category === 'event') setService('Event');
    } else if (preselectedItem) {
      setPackageChoice(`Referensi Foto: ${preselectedItem.title}`);
      if (preselectedItem.category === 'event') setService('Event');
      else if (preselectedItem.category === 'graduation') setService('Wisuda');
      else if (preselectedItem.category === 'wedding') setService('Wedding');
      else if (preselectedItem.category === 'prewedding') setService('Prewedding');
      else if (preselectedItem.category === 'birthday') setService('Birthday');
      else setService(preselectedItem.categoryLabel);
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
    const text = `Halo Admin FYPotret (@fypotretid)!
Saya ingin menanyakan ketersediaan jadwal dan reservasi sesi foto:

👤 Nama: ${name || 'Calon Klien'}
📸 Layanan: ${service}
📦 Pilihan Paket / Referensi: ${packageChoice || 'Ingin konsultasi rekomendasi'}
📅 Rencana Tanggal: ${eventDate || 'Dapat didiskusikan'}
📍 Lokasi Sesi: ${location}
📝 Catatan Tambahan: ${notes || '-'}

Apakah jadwal pada tanggal tersebut masih tersedia? Mohon informasi ketersediaan dan detail selanjutnya. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    // Standard phone link for FYPotret (WhatsApp)
    const waUrl = `https://wa.me/6281234567890?text=${encodedText}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3.5 sm:p-4 animate-fade-in select-none">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-obsidian-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-7 max-h-[90vh] overflow-y-auto z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center border border-white/5"
          aria-label="Tutup Form Booking"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-3.5 sm:mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 text-[11px] font-semibold mb-1.5 border border-gold-500/20">
            <Camera className="w-3 h-3" />
            <span>Fast Response WhatsApp Admin</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-serif font-bold text-white leading-tight">
            Reservasi Jadwal & Konsultasi
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Lengkapi formulir singkat di bawah ini untuk terhubung langsung ke WhatsApp kami.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
          {/* Name Field */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold-400" />
              Nama Lengkap / Panggilan
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Nabila Putri"
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Service Category & Location: 2 Columns on Mobile */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div>
              <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-gold-400" />
                Jenis Layanan
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-2.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer text-xs sm:text-sm"
              >
                <option value="Wisuda">Wisuda</option>
                <option value="Wedding">Wedding</option>
                <option value="Prewedding">Prewedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Event">Event</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Area Lokasi
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-2.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer text-xs sm:text-sm"
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
            <label className="block text-zinc-300 font-medium mb-1">
              Pilihan Paket / Catatan Khusus
            </label>
            <input
              type="text"
              value={packageChoice}
              onChange={(e) => setPackageChoice(e.target.value)}
              placeholder="Contoh: Paket Graduation Squad / Wedding Akad"
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              Estimasi Tanggal Pemotretan
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
              Pertanyaan / Permintaan Khusus
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Misal: Rencana outdoor di kampus UI Depok bersama 5 teman..."
              className="w-full px-3.5 py-2 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button (Concise 1-Line CTA with WhatsApp Icon) */}
          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-obsidian-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:brightness-110 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] mt-3 sm:mt-4"
          >
            <WhatsAppIcon className="w-4 h-4 fill-obsidian-950 flex-shrink-0" />
            <span className="whitespace-nowrap">Kirim ke WhatsApp</span>
          </button>
        </form>

        <p className="text-[11px] text-zinc-500 text-center mt-2.5">
          🔒 Terhubung langsung ke WhatsApp resmi FYPotret
        </p>

      </div>
    </div>
  );
};
