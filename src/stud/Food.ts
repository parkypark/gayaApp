export interface Food {
    Id: number;
    RestaurantID: number;
    Name: string;
    Description: string;
    Ingredients: string;
    IngredientsList: string[];
    Price: number;
    Enabled: boolean;
    Created_at: string;
    Updated_at: string;
}
