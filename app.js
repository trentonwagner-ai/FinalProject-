// Main Array
const daedricArtifacts = [  
{ name: "Mace of Molag Bal", baseDamage : 17, weaponType:"Mace" },  
{ name: "Dawnbreaker", baseDamage: 12, weaponType: "Sword" },  
{ name: "Voldendrung", baseDamage: 25, weaponType: "Warhammer" },  
{ name: "Ebony Blade", baseDamage: 13, weaponType: "Greatsword" },];

// Adding button function
const addbtn = document.getElementById('add-btn')
// Letting user click to add another object
addbtn.addEventListener('click', function() {
  const weaponName = document.getElementById('input-name').value;
  const weaponKind = document.getElementById('input-category').value;
const weaponDam = parseInt(document.getElementById ('input-rating').value);
//Once clicked the new object will be pushed into the array
daedricArtifacts.push({ name: weaponName, baseDamage : weaponDam, weaponType: weaponKind })
//render so it keeps it in check
renderCollection(daedricArtifacts);
renderStats();
})
// clearing to make sure it doesnt stack up
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
renderStats();

// SEARCH

// get search bar
const userInput = document.getElementById('search-input')

// Add event listener on search bar
userInput.addEventListener('keyup', function() {

  let lowerCaseInput = userInput.value.toLowerCase();

      const filtered = daedricArtifacts.filter(artifact => {

        return artifact.name.toLowerCase().includes(lowerCaseInput);
    
    })
    renderCollection(filtered);
  });












// STATS
  
// count the length 
function renderStats() {
  const totalCount = daedricArtifacts.length
  
  const avgDam = Number(daedricArtifacts.reduce((acc, artifact) => acc + artifact.baseDamage, 0) / totalCount).toFixed(2);

  const statsDisplay = document.getElementById('stats-display');

  // render

statsDisplay.innerHTML = `
<p>Total Number of Artifacts: ${totalCount}</p>
<p>Average Damage: ${avgDam}</p>
`;

}
