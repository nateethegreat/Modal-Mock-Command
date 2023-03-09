const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mock')
    .setDescription('Ask me to repeat something.'),
    async execute(interaction) {
  
        const modal = new ModalBuilder()
        .setCustomId('mock_modal') // Changing not recommended unless you know what you're doing.
        .setTitle('Mock');
        
        const text = new TextInputBuilder()
        .setCustomId('text') // Changing not recommended unless you know what you're doing.
        .setLabel("Enter Message (Made By NotNate#0278)")
        .setMaxLength(100) // Can be changed to anything
        .setStyle(TextInputStyle.Paragraph); // Recommended to keep on Paragraph
        
        const secondActionRow = new ActionRowBuilder().addComponents(text);
        
        modal.addComponents(secondActionRow);
        interaction.showModal(modal);
    }
}
