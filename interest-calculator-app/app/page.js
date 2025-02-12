import Form from 'next/form'

export default function MainPage() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Form action="/search">
      <input name="Anos"/>
      <button type='submit'>Submit</button>
      </Form>
    </main>
  );
}
