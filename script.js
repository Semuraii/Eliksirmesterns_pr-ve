const cauldron = {
    herbs: 0,
    berries: 0,
    mushrooms: 0,
    water: 0,
    flowers: 0
};

function addIngredient(type) {
    cauldron[type]++;
    console.log(`La til 1 ${type} i gryta.`);
    updateUI();
    updateStatus(`La til ${type}!`);
}

function updateUI() {
    document.getElementById("herbs").textContent = cauldron.herbs;
    document.getElementById("berries").textContent = cauldron.berries;
    document.getElementById("mushrooms").textContent = cauldron.mushrooms;
    document.getElementById("water").textContent = cauldron.water;
    document.getElementById("flowers").textContent = cauldron.flowers;
}

function printCauldron() {
    console.log("\nGryta inneholder:");
    console.log(`Herbs: ${cauldron.herbs}`);
    console.log(`Berries: ${cauldron.berries}`);
    console.log(`Mushrooms: ${cauldron.mushrooms}`);
    console.log(`Water: ${cauldron.water}`);
    console.log(`Flowers: ${cauldron.flowers}`);
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
        console.log("\nGratulerer! Du har brygget en perfekt healing potion!");
        updateStatus("✅ Perfekt potion!");
    } else {
        console.log("\nÆsj! Dette ble ikke en healing potion. Prøv igjen.");
        updateStatus("❌ Feil oppskrift!");
    }
}

function updateStatus(message) {
    document.getElementById("status").textContent = message;
}