import { Category } from "./category"
import { omit } from 'lodash'

describe('Category testes', ()=> {
    test('constructor of category', () => {
        let category = new Category({name: 'Movie'})

        let props = omit(category.props, 'created_at')
        
        expect(props).toStrictEqual(
            {
                name: "Movie",
                description: null,
                is_active: true,
            }
        )
        // expect(category.name).toBe('Movie');
        // expect(category.description).toBe('some description');
        // expect(category.is_active).toBeTruthy();
        // expect(category.created_at).toBe(created_at)
    })
}) 
