export async function getAllItems() {
    const response = await fetch('/api/get-all-items');
    return await response.json();
}

export async function updateToFav(data) {
    const response = await fetch(`/api/add-to-fav`, {
        method: 'POST',
        body: JSON.stringify({ item: data }),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
    
}

export async function getAllFavourites() {
    console.log("hit")
    const response = await fetch('/api/get-all-fav-items');
    return await response.json();
}
 