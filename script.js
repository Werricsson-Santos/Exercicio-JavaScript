const attackerName = prompt('Insira o nome do atacante:')
const attackerPower = prompt('Insira o poder de ataque:')

const defenderName = prompt('Insira o nome do defensor:')
let   healthPoint = prompt('Quantos pontos de vida ele possui?')
const defenderPower = prompt('Insira o poder de defesa:')
const defenderShield = prompt('Seu defensor possui escudo? (Sim/Não)')

let damage = 0

if (attackerPower > defenderPower && defenderShield === 'Não') {
    damage = attackerPower - defenderPower
} else if (attackerPower > defenderPower && defenderShield === 'Sim') {
    damage = (attackerPower - defenderPower) / 2
}

healthPoint -= damage

alert(attackerName + ' causou' + damage + ' pontos de dano em ' + defenderName)
alert(
    attackerName + '\nPoder de ataque: ' + attackerPower + '\n\n' +
    defenderName + '\nPontos de vida: ' + healthPoint +
    '\nPoder de defesa: ' + defenderPower + '\nPossui escudo: ' + defenderShield
)
