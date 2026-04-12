$outDir = "d:\QD projects\QD_Adams_academy\public\gallery"

$urls = @(
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-1-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-2-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-3-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-4-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-5-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-6-xrtixawj4c.jpg",
    "https://content.jdmagicbox.com/comp/kanyakumari/s7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-7-xrtixawj4c.jpg"
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
$wc.Headers.Add("Referer", "https://www.justdial.com/")

$i = 1
foreach ($url in $urls) {
    try {
        $outFile = Join-Path $outDir "photo$i.jpg"
        $wc.DownloadFile($url, $outFile)
        $size = (Get-Item $outFile).Length
        Write-Host "Downloaded photo$i.jpg ($size bytes)"
    } catch {
        Write-Host "FAILED photo$i.jpg : $($_.Exception.Message)"
    }
    $i++
}
