// Save Contact button
document.querySelector('.save-btn').addEventListener('click', () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Askar Hussain
TEL;TYPE=CELL:+91-8075299870
EMAIL:nyxgstoreofficial@gmail.com
URL:https://www.nyx-g.store/
END:VCARD
`;

    const blob = new Blob([vCardData.trim()], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'askar_hussain_contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});


// Theme Toggle
document.getElementById('modeToggle').addEventListener('click', () => {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('data-theme',
        htmlTag.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
});

// Share Button
document.getElementById('shareBtn').addEventListener('click', async () => {
    try {
        await navigator.share({
            title: 'Digital Profile',
            text: 'Check out this profile of Askar Hussain',
            url: window.location.href
        });
    } catch (err) {
        alert("Share failed or cancelled.");
    }
});

// QR Code Generation (static value)
const qrCanvas = document.getElementById('qrCanvas');
const qr = new QRious({
    element: qrCanvas,
    value: 'https://share.google/icVbnh5HQraY1hYQP',  // << You can change this value
    size: 200,
    level: 'H'
});

// Contact list with hyperlinks
const contacts = [
    { type: '', icon: 'fa-solid fa-globe', data: 'nyx-g.store', href: 'https://www.nyx-g.store/' },
    { type: 'Email', icon: 'fa-envelope', data: '', href: 'mailto:nyxgstoreofficial@gmail.com' },
    { type: 'Whatsapp', icon: 'fa-brands fa-whatsapp', data: 'Nyx-G Store', href: 'https://wa.me/+918075299870' },
    { type: 'Instagram', icon: 'fa-brands fa-instagram', data: '@nyx.gstore', href: 'https://www.instagram.com/nyx.gstore/' },
    { type: 'LinkedIn', icon: 'fa-brands fa-linkedin', data: 'Askar Hussain', href: 'https://www.linkedin.com/in/askar-hussain-44316b31b/' },
    { type: 'Facebook', icon: 'fa-brands fa-facebook', data: 'Askar Hussain', href: 'https://www.facebook.com/share/1D6XAji1Xr/' },
    { type: '', icon: 'fa-brands fa-x-twitter', data: 'NYX-G STORE', href: 'https://x.com/nyx_gstore' },
];

const connectSection = document.getElementById('connect-section');

contacts.forEach(({ type, icon, data, href }) => {
    connectSection.innerHTML += `
        <a href="${href}" target="_blank" class="list">
            <div class="left"><i class="fa ${icon}"></i></div>
            <div class="middle">
                <b>${type}</b><small> ${data}</small>
            </div>
            <div class="right"><i class="fa-solid fa-arrow-right"></i></div>
        </a>
    `;
});
