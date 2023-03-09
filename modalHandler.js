const { ChannelType, AttachmentBuilder, escapeCodeBlock, codeBlock, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ModalSubmitFields, ModalSubmitInteraction } = require('discord.js');

module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {
        const { customId, options } = interaction;

        const guildID = interaction.guild.id;
        const userID = interaction.user.id;

        if (!guildID) return;

        if (interaction.isModalSubmit()) {

            switch (customId) {
                case "mock_modal":

                    const mock = interaction.fields.getTextInputValue('text');
                    if (mock.toLowerCase().includes("@")) return interaction.reply({ content: `You can't mention people.`, ephemeral: true });

                    interaction.reply({ content: `"${mock}"\n\n***Author: <@${interaction.user.id}>***` });
                    break;
                
        } else if (!interaction.isModalSubmit()) {
            return;
        }
    }
}
