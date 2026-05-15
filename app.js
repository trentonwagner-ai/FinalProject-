const daedricArtifacts = [  
{ name: "Mace of Molag Bal", baseDamage : 17, weaponType:"Mace" },  
{ name: "Dawnbreaker", baseDamage: 12, weaponType: "Sword" },  
{ name: "Voldendrung", baseDamage: 25, weaponType: "Warhammer" },  
{ name: "Ebony Blade", baseDamage: 13, weaponType: "Greatsword" },];

function renderCollection(artifacts) {
const display = document.getElementById('collection-display');
display.innerHTML = ''; // clear everything
artifacts.forEach((artifact) => {
display.innerHTML += `
<div class="item-card">
<h3>${artifact.name}</h3>
<p>Base Damage: ${artifact.baseDamage}</p>
<p>Weapon Type: ${artifact.weaponType}</p>
</div>
`;
});
}
// Call it on page load:
renderCollection(daedricArtifacts);

