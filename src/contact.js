const blur = document.querySelector('#blur');
const email = document.querySelector('#email');
const emailLink = document.querySelector('#emailLink');
const discord = document.querySelector('#discord');
const discordLink = document.querySelector('#discordLink');
const copyright = document.querySelector('#copyright');
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)  {
        blur.classList.add('blurContact');
        email.classList.remove('emailPreset');
        emailLink.classList.remove('emailPreset');
        discord.classList.remove('emailPreset');
        discordLink.classList.remove('emailPreset');   
        copyright.classList.remove('emailPreset');
        email.classList.add('email');
        emailLink.classList.add('emailLink');
        discord.classList.add('discord');
        discordLink.classList.add('discordLink');
        copyright.classList.add('copyright');
    }
};