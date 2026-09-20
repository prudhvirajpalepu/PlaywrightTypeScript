//contains of reusable helpers(Date formatters, DB Connectors, etc)
import fs from 'fs';
import path from 'path';

export class CommonUtils {

    // Generate random string
    static generateRandomString(length: number = 8): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return result;
    }


    // Generate random number
    static generateRandomNumber(max: number = 10000): number {
        return Math.floor(Math.random() * max);
    }


    // Generate random email
    static generateRandomEmail(): string {
        const randomText = this.generateRandomString(6).toLowerCase();

        return `test_${randomText}@gmail.com`;
    }


    // Get today's date
    static getCurrentDate(): string {
        const date = new Date();

        return date.toISOString().split('T')[0];
    }


    // Get future date
    static getFutureDate(days: number): string {
        const date = new Date();

        date.setDate(date.getDate() + days);

        return date.toISOString().split('T')[0];
    }


    // Get past date
    static getPastDate(days: number): string {
        const date = new Date();

        date.setDate(date.getDate() - days);

        return date.toISOString().split('T')[0];
    }


    // Generate current timestamp
    static getTimestamp(): number {
        return Date.now();
    }


    // Wait/Sleep utility
    static async wait(milliseconds: number): Promise<void> {
        return new Promise(resolve =>
            setTimeout(resolve, milliseconds)
        );
    }


    // Read JSON test data
    static readJsonFile(filePath: string): any {

        const fullPath = path.resolve(filePath);

        const fileContent = fs.readFileSync(
            fullPath,
            'utf-8'
        );

        return JSON.parse(fileContent);
    }


    // Convert string to uppercase
    static convertToUpperCase(value: string): string {
        return value.toUpperCase();
    }


    // Convert string to lowercase
    static convertToLowerCase(value: string): string {
        return value.toLowerCase();
    }
}