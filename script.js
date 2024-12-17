const dummyDNS = {
  "ujian.com": "192.168.80.6",
  "example.com": "93.184.216.34",
  "google.com": "142.250.190.14"
};

function resolveDNS() {
  const domain = document.getElementById("domainInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!domain) {
      resultDiv.innerHTML = "<span style='color: red;'>Harap masukkan nama domain!</span>";
      return;
  }

  // Periksa apakah domain sudah ada dalam dummyDNS
  if (dummyDNS[domain]) {
      resultDiv.innerHTML = `<strong>Alamat IP untuk ${domain}:</strong> ${dummyDNS[domain]}`;
  } else {
      // Generate IP Address secara otomatis
      const generatedIP = generateRandomIP();
      dummyDNS[domain] = generatedIP; // Tambahkan domain dan IP ke data dummy
      resultDiv.innerHTML = `<strong>Domain baru ditambahkan:</strong> ${domain}<br><strong>Alamat IP:</strong> ${generatedIP}`;
  }
}

// Fungsi untuk generate IP Address acak di range 192.168.x.x
function generateRandomIP() {
  const octet3 = Math.floor(Math.random() * 255); // Octet ke-3
  const octet4 = Math.floor(Math.random() * 255); // Octet ke-4
  return `192.168.${octet3}.${octet4}`;
}
