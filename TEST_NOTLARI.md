# Test Notları

Test tarihi: 22 Ekim 2026

| Test | Girdi / işlem | Beklenen sonuç | Gerçekleşen sonuç | Durum |
|---|---|---|---|---|
| Sayfaların semantik yapısı ve ortak gezinme | `index.html`, `etkinlikler.html`, `hakkimizda.html` HTML yapısı, `lang`, stylesheet, gezinme hedefleri ve yerel bağlantılar kontrol edildi. | Üç sayfanın dili Türkçe olmalı, ortak `style.css` dosyasını kullanmalı; gezinme menüsündeki üç sayfa bağlantısı ve yerel hedefler mevcut olmalı. | Üç sayfada `lang="tr"` ve ortak stil dosyası bulundu. Her menüde üç sayfaya da bağlantı ve var olan yerel hedefler doğrulandı. | **GEÇTİ** |
| Etkinlik kartları ve Yapay Zekâ Atölyesi | Etkinlik kartları sayıldı; kart başlıkları, içerik alanları ve atölye bilgileri kontrol edildi. | En az beş kart olmalı; her kartta başlık, tarih, açıklama ve yer bulunmalı. Yapay Zekâ Atölyesi bir kez görünmeli. | Yedi semantik `article` kartı bulundu; her kartta başlık ve tarih, açıklama ve yer mevcut. Yapay Zekâ Atölyesi tek kez bulundu: 2 Ocak, 14.00, Bilgisayar Laboratuvarı. Başlangıç sayacı yedi etkinlik gösteriyor. | **GEÇTİ** |
| Yerel HTTP sunumu | Yerel HTTP sunucusundan üç HTML sayfası ve `style.css` istendi. | Dört dosyanın her biri HTTP 200 yanıtı vermeli. | `index.html`, `etkinlikler.html`, `hakkimizda.html` ve `style.css` isteklerinin tamamı HTTP 200 yanıtı verdi. | **GEÇTİ** |
| Atölye adına göre arama | Arama alanına `YAPAY ZEKÂ` yazıldı. | Yalnızca Yapay Zekâ Atölyesi görünmeli; sayaç bir etkinlik göstermeli; sonuç yok mesajı gizli kalmalı. | Bir kart görünür kaldı, sayaç `1 etkinlik listeleniyor.` oldu ve sonuç yok mesajı gizli kaldı. | **GEÇTİ** |
| Konuma göre arama | Arama alanına `bilgisayar laboratuvarı` yazıldı. | Bu konumdaki etkinlikler görünmeli; sayaç eşleşme sayısını göstermeli. | Dört kart görünür kaldı, sayaç `4 etkinlik listeleniyor.` oldu ve sonuç yok mesajı gizli kaldı. | **GEÇTİ** |
| Eşleşme bulunamaması | Arama alanına `eşleşmeyen arama` yazıldı. | Hiçbir kart görünmemeli, sayaç sıfır göstermeli ve sonuç yok mesajı görünmeli. | Sıfır kart görünür kaldı, sayaç `0 etkinlik listeleniyor.` oldu ve sonuç yok mesajı gösterildi. | **GEÇTİ** |
| Temizle düğmesi | Önceki aramadan sonra Temizle düğmesine tıklandı. | Arama alanı boşalmalı, tüm kartlar geri gelmeli, sayaç güncellenmeli, sonuç yok mesajı gizlenmeli ve odak arama alanına dönmeli. | Arama alanı boşaldı; yedi kartın tamamı göründü; sayaç yedi oldu; sonuç yok mesajı gizlendi ve odak arama alanına döndü. | **GEÇTİ** |
| Değişiklik biçimi | `git diff --check` çalıştırıldı. | Boşluk veya patch biçimi hatası olmamalı. | Komut hatasız tamamlandı; boşluk hatası bulunmadı. | **GEÇTİ** |

## Test yöntemi ve kapsam

HTML yapısı, bağlantılar ve HTTP yanıtları Python ile; arama ve düğme davranışları kontrollü DOM test ortamında JavaScript ile doğrulandı. Gerçek grafik tarayıcıda elle görsel inceleme yapılmadı. Testlerde düzeltme gerektiren bir sorun bulunmadı.
