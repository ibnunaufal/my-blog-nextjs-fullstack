'use client';

export default function Create() {
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        try {
            await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            alert('Post created successfully');
            
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the post');
        }
    };

    return <div className="container mx-auto">
        <form onSubmit={submit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
            </div>
            <div className="form control mt-2">
                <label className="label">
                    <span className="label-text">Content</span>
                </label>
                <textarea name="content" placeholder="Content" className="textarea textarea-bordered" required></textarea>
            </div>
            <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary btn-wide">Create</button>
            </div>
        </form>
    </div>
}