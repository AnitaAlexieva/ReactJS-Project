import './create.css'

export default function CreateRecipe() {
    return(
        <section className="create">
        <div className="create-form">
          <h2>Create your own recipe</h2>
          <form>
            <input type="text" name="name" placeholder="Recipe Name" required/>
            <input type="email" name="category" placeholder="Category" required/>
            <input type="text" name="time" placeholder="Time" required/>
            <input type="text" name="ingredients" placeholder="Ingredients" required/>
            <textarea name="message" placeholder="Way of preparetion" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
}