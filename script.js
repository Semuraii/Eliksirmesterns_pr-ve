const cauldron = {
    herbs: 0,
    berries: 0,
    mushrooms: 0,
    water: 0,
    flowers: 0
};

const emojis = {
    herbs: "🌿",
    berries: "🍓",
    mushrooms: "🍄",
    water: "💧",
    flowers: "🌸"
};

function addIngredient(type) {
    cauldron[type]++;
    console.log(`${emojis[type]} La til 1 ${type} i gryta.`);
    updateUI();
    updateStatus(`${emojis[type]} La til 1 ${type}!`);
}

function updateUI() {
    document.getElementById("herbs").textContent = cauldron.herbs;
    document.getElementById("berries").textContent = cauldron.berries;
    document.getElementById("mushrooms").textContent = cauldron.mushrooms;
    document.getElementById("water").textContent = cauldron.water;
    document.getElementById("flowers").textContent = cauldron.flowers;
}

function printCauldron() {
    console.log("\n🧪 Gryta inneholder:");
    console.log(`${emojis.herbs} Herbs: ${cauldron.herbs}`);
    console.log(`${emojis.berries} Berries: ${cauldron.berries}`);
    console.log(`${emojis.mushrooms} Mushrooms: ${cauldron.mushrooms}`);
    console.log(`${emojis.water} Water: ${cauldron.water}`);
    console.log(`${emojis.flowers} Flowers: ${cauldron.flowers}`);
}

function checkPotion() {
    printCauldron();

    const correct =
        cauldron.herbs === 2 &&
        cauldron.berries === 1 &&
        cauldron.mushrooms === 1 &&
        cauldron.water === 0 &&
        cauldron.flowers === 0;

    if (correct) {
        console.log("\n🎉 Gratulerer! Perfekt healing potion!");
        updateStatus("🎉 Perfekt! Du føler deg sterkere!");
    } else {
        console.log("\n💀 Feil potion...");
        updateStatus("💀 Wrong potion! Resetting...");
        resetCauldron();
    }
}

function resetCauldron() {
    for (let key in cauldron) {
        cauldron[key] = 0;
    }

    updateUI();
    updateStatus("💀 Usj, dette var ikke riktig. Prøv igjen!");
    console.log("Cauldron has been reset.");
}

function showRecipe() {
    const recipe = "Oppskrift: 2 Herbs 🌿, 1 Berry 🍓, 1 Mushroom 🍄";
    console.log(recipe);
    updateStatus("🕵️ " + recipe);
}

function updateStatus(message) {
    document.getElementById("status").textContent = message;
}