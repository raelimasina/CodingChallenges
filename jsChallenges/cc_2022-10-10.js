function howMuchILoveYou(nbPetals) {
    const options = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'];
    return options[(nbPetals%6)];
}
