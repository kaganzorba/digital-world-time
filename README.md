

# 🌍 Dijital Dünya Saati

## Proje Amacı
Bu uygulama, dünya genelinde 6 büyük şehrin (New York, London, Tokyo, İstanbul, Paris, Sydney) anlık saatini ve güncel hava durumu bilgisini modern ve kullanıcı dostu bir arayüzle sunar. Hem masaüstü hem mobil cihazlarda sorunsuz çalışır. Hedef: Kullanıcıya hızlıca şehirler arası saat ve hava durumu karşılaştırması yapma imkânı vermek.

## Kullanılan Diller ve Teknolojiler
- **HTML5**: Arayüz ve iskelet
- **CSS3**: Responsive ve modern tasarım (Grid, Flexbox, dark mode)
- **JavaScript (ES6+)**: Tüm dinamik işlemler, saat ve hava durumu güncellemeleri
- **OpenWeatherMap API**: Gerçek hava durumu verisi (isteğe bağlı)

## Nasıl Çalıştırılır?
### 1. Projeyi İndir
- Proje dosyalarını bilgisayarına indir veya GitHub'dan klonla.
- Tüm dosyaların (index.html, script.js, styles.css) aynı klasörde olduğundan emin ol.

### 2. Uygulamayı Başlat
- `index.html` dosyasına çift tıkla. Proje otomatik olarak tarayıcıda açılır ve çalışır.

#### Alternatif Yöntemler (Sorun Yaşarsan)
- **Google Chrome ile aç:** index.html dosyasını Chrome'a sürükle-bırak.
- **Netlify Drop:** https://app.netlify.com/drop adresine proje klasörünü sürükle, çıkan linke tıkla.
- **Visual Studio Code + Live Server:** VS Code'da klasörü aç, Live Server eklentisiyle index.html'i başlat.

## API Anahtarı (Gerçek Hava Durumu için)
Projede gerçek hava durumu verisi görmek için OpenWeatherMap API anahtarı gereklidir. API anahtarı eklemezsen uygulama sahte (örnek) hava durumu gösterir, saatler her zaman çalışır.

**API Anahtarı Ekleme Adımları:**
1. https://openweathermap.org/api adresinden ücretsiz hesap aç.
2. API anahtarını kopyala.
3. `script.js` dosyasını bir metin editörüyle aç.
4. En üstteki şu satırı bul:
   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
   ```
5. Kendi anahtarınla değiştir:
   ```javascript
   const apiKey = 'buraya-kendi-api-anahtarını-yaz';
   ```
6. Dosyayı kaydet, sayfayı yenile.

## Özellikler
- ⏰ 6 şehir için anlık saat
- 🌤️ Gerçek veya örnek hava durumu
- 🌙 Karanlık/Aydınlık tema
- 📱 Mobil ve masaüstü uyumlu tasarım
- 📅 Haftalık hava tahmini (örnekleme)
- 🔄 12/24 saat formatı seçimi

## Sık Karşılaşılan Problemler ve Çözümleri

### 1. Proje açılmıyor veya boş sayfa geliyor
- Tüm dosyaların aynı klasörde olduğundan emin ol.
- Farklı bir tarayıcı (tercihen Chrome) ile dene.
- Hâlâ açılmıyorsa Netlify Drop ile dene.

### 2. Hava durumu verisi gelmiyor
- API anahtarı eklemedin, bu normal. Sadece saatler çalışır.
- Gerçek hava durumu için yukarıdaki "API Anahtarı" adımlarını uygula.

### 3. Hata veya kırmızı uyarı görüyorsan
- Tarayıcıda F12'ye bas, Console sekmesindeki hata mesajını kopyala.
- Hatanın ekran görüntüsünü veya mesajını geliştiriciye ilet.

### 4. Mobilde veya tablette sorun
- Sayfayı yenile, farklı tarayıcı dene.
- Proje responsive olduğu için tüm cihazlarda çalışır.

---

## Kısa Özet
1. Projeyi indir, klasöre çıkar.
2. index.html dosyasına çift tıkla.
3. Hava durumu için API anahtarı eklemek istersen script.js'yi düzenle.
4. Olmazsa Chrome'a sürükle veya Netlify Drop kullan.


