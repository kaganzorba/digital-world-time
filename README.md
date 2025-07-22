
# Dijital Dünya Saati

Bu proje, New York, Londra, Tokyo, İstanbul, Paris ve Sydney şehirlerinin anlık saat ve hava durumu bilgisini gösterir.

## Projeyi Çalıştırmak İçin

1. Proje dosyalarını bilgisayarınıza indirin veya kopyalayın.
2. `index.html` dosyasını çift tıklayarak veya bir tarayıcıda açın.
3. Saatler ve hava durumu otomatik olarak ekranda görünür.

## Kullanılan Teknolojiler

- HTML, CSS, JavaScript (Vanilla)
- CSS Grid ve Flexbox ile modern ve duyarlı tasarım
- JavaScript Intl API ile saat ve tarih formatlama
- OpenWeatherMap API ile gerçek hava durumu verisi

## API Anahtarı Nasıl Eklenir?

Gerçek hava durumu verisi görebilmek için ücretsiz bir OpenWeatherMap API anahtarına ihtiyacınız var.

> **Not:** Projeyi ilk başlattığınızda API anahtarınızı henüz eklemediyseniz, ekranda göreceğiniz hava durumu ve nem gibi veriler anlık ve güncel değildir. Gerçek zamanlı veri için mutlaka kendi API anahtarınızı ekleyin.

1. [OpenWeatherMap](https://openweathermap.org/api) sitesine üye olun ve API anahtarınızı alın.
2. Proje klasöründe `script.js` dosyasını açın.
3. En üstteki şu satırı bulun:

   ```js
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

4. Tırnaklar arasına kendi API anahtarınızı yazın. Örnek:

   ```js
   const apiKey = 'buraya-kendi-apikeyinizi-yazın';
   ```

> **Dikkat:** Güvenliğiniz için kendi API anahtarınızı GitHub'a veya herkese açık bir yere yüklemeyin.

## Notlar

- Proje tamamen tarayıcıda çalışır, ek bir kurulum veya terminal komutu gerekmez.
- Sadece kendi bilgisayarınızda API anahtarınızı ekleyin, paylaşmayın.

Herhangi bir sorunda bana ulaşabilirsiniz.

