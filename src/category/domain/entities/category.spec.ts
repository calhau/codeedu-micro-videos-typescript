import { Category } from "./category"
import { omit, templateSettings } from 'lodash'

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

        expect(category.props.created_at).toBeInstanceOf(Date);

        category = new Category({name: 'Movie', description: "some description", is_active: false})
        let created_at = new Date()

        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "some description",
            is_active: false,
            created_at
        })

        category = new Category({name: 'Movie', description: "other description"})

        expect(category.props).toMatchObject({
            name: "Movie",
            description: "other description",
        })


        category = new Category({name: 'Movie', is_active: true})

        expect(category.props).toMatchObject({
            name: "Movie",
            is_active: true
        })

        // expect(category.name).toBe('Movie');
        // expect(category.description).toBe('some description');
        // expect(category.is_active).toBeTruthy();
        // expect(category.created_at).toBe(created_at)
       
    })
templateSettings    
    test("getter of name field", () => {
        const category = new Category({name: 'Movie'})

        expect(category.name).toBe('Movie')
    })
}) 
