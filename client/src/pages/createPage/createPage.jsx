
import './createPage.css'

function CreatePage() {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadBox">
            <img src="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            we recommend using high-quality .jpg files less than 20MB.
          </div>
          
        </div>
        <form action="" className="createForm">
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" placeholder="add your title" />
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <textarea rows={6} type="text" id='link' name='link' placeholder='Add a detailed description' />

            </div>
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input type="text" id='link' name='link' placeholder='Add a link' />

            </div>

            <div className="createFormItem">
              <label htmlFor="board">Board</label>
              <select name="board" id="board">
                <option>choose a board</option>
                <option value="board1">Board 1</option>
                <option value="board2">Board 2</option>
                <option value="board3">Board 3</option>
              </select>
            </div>
            <div className="createFormItem">
              <label htmlFor="tags">Tags</label>
              <input type="text" id='tags' name='tags' placeholder='Add up to 20 tags' />
              <small>Separate tags with commas</small>
            </div>
          </form>
      </div>
    </div>
  )
}

export default CreatePage