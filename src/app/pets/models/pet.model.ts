export class PetModel {
    constructor(
        public name: string, 
        public decription: string,
        public imageURL: string,
        public category?: string,
        public likes?: number) {}
}