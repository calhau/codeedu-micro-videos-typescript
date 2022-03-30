import { Category } from "./category"

describe('Category testes', ()=> {
    test('constructor of category', () => {

        const created_at = new Date();
        const props = {
            name: "Movie",
            description: "some description",
            is_active: true,
            created_at
        }
        const category = new Category(props); 
        
        expect(category.props).toStrictEqual(
            {
                name: "Movie",
                description: "some description",
                is_active: true,
                created_at
            }
        )
        // expect(category.name).toBe('Movie');
        // expect(category.description).toBe('some description');
        // expect(category.is_active).toBeTruthy();
        // expect(category.created_at).toBe(created_at)
    })
}) 