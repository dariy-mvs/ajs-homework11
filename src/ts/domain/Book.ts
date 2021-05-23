import Buyable from './Buyable';

/**                                                                                                                                                                                                                                                                                  
 * @module user                                                                                                                                                                                                                                                                      
 */                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                     
/**                                                                                                                                                                                                                                                                                  
 * Load user info by id                                                                                                                                                                                                                                                              
 *                                                                                                                                                                                                                                                                                   
 * @param {number} id user id                                                                                                                                                                                                                                                        
 * @returns {Object} user info                                                                                                                                                                                                                                                       
 */
export default class Book implements Buyable {
        readonly count: number;
        readonly increasing: boolean;
        readonly id: number;
        readonly name: string;
        readonly author: string;
        readonly price: number;
        readonly pages: number;
        readonly percent?: number;
        constructor(id: number, name: string, author: string, price: number, pages: number, percent?: number ) { 
        this.count = 1,
        this.increasing = false,
        this.id = id,
        this.name = name,
        this.author = author,
        this.price = price,
        this.pages = pages,
        this.percent = percent
    }
}

