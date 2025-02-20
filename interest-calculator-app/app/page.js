import Form from 'next/form'

export default function MainPage() {
  return (
    <main>
      <div className="mainDiv">
      <h1>Investment calculator</h1>
      <Form action="/search">
      <input name="Initial investment"/>
      <input name="Monthly investment"/>
      <input name="Aplication period"/>
      <input name="Interest rate"/>
      <button type='submit'>Submit</button>
      </Form>
      </div>
    </main>
  );
}