import { Album } from "../album.dto";
import { Book } from "../book.dto";
import { Category } from "../category.dto";
import { User } from "../user.dto";
import { Comment } from "../coment.dto";
import { Reply } from "../reply.dto";
import { Language } from "../language.dto";


// Mock Categories
const mockCategories: Category[] = [
    { id: "1", name: "Science Fiction" },
    { id: "2", name: "Mystery" },
    { id: "3", name: "Fantasy" },
    { id: "4", name: "Romance" },
    { id: "5", name: "Thriller" },
    { id: "6", name: "Adventure" },
    { id: "7", name: "Non-Fiction" },
    { id: "8", name: "Historical Fiction" },
    { id: "9", name: "Biography" },
    { id: "10", name: "Horror" },
];

// Mock Users
const mockUsers: User[] = [
    { userName: "user1", email: "user1@example.com", photoUrl: "https://example.com/user1.jpg", phone: "+1234567890", createdAt: new Date() },
    { userName: "user2", email: "user2@example.com", photoUrl: "https://example.com/user2.jpg", phone: "+1234567891", createdAt: new Date() },
    { userName: "user3", email: "user3@example.com", photoUrl: "https://example.com/user3.jpg", phone: "+1234567892", createdAt: new Date() },
    { userName: "user4", email: "user4@example.com", photoUrl: "https://example.com/user4.jpg", phone: "+1234567893", createdAt: new Date() },
    { userName: "user5", email: "user5@example.com", photoUrl: "https://example.com/user5.jpg", phone: "+1234567894", createdAt: new Date() },
    { userName: "user6", email: "user6@example.com", photoUrl: "https://example.com/user6.jpg", phone: "+1234567895", createdAt: new Date() },
    { userName: "user7", email: "user7@example.com", photoUrl: "https://example.com/user7.jpg", phone: "+1234567896", createdAt: new Date() },
    { userName: "user8", email: "user8@example.com", photoUrl: "https://example.com/user8.jpg", phone: "+1234567897", createdAt: new Date() },
    { userName: "user9", email: "user9@example.com", photoUrl: "https://example.com/user9.jpg", phone: "+1234567898", createdAt: new Date() },
    { userName: "user10", email: "user10@example.com", photoUrl: "https://example.com/user10.jpg", phone: "+1234567899", createdAt: new Date() },
];

// Mock Albums
const mockAlbums: Album[] = [
    { id: "1", title: "Album 1", categories: [mockCategories[0]], createdAt: new Date(), updatedAt: new Date() },
    { id: "2", title: "Album 2", categories: [mockCategories[1]], createdAt: new Date(), updatedAt: new Date() },
    { id: "3", title: "Album 3", categories: [mockCategories[2]], createdAt: new Date(), updatedAt: new Date() },
    { id: "4", title: "Album 4", categories: [mockCategories[3]], createdAt: new Date(), updatedAt: new Date() },
    { id: "5", title: "Album 5", categories: [mockCategories[4]], createdAt: new Date(), updatedAt: new Date() },
    { id: "6", title: "Album 6", categories: [mockCategories[5]], createdAt: new Date(), updatedAt: new Date() },
    { id: "7", title: "Album 7", categories: [mockCategories[6]], createdAt: new Date(), updatedAt: new Date() },
    { id: "8", title: "Album 8", categories: [mockCategories[7]], createdAt: new Date(), updatedAt: new Date() },
    { id: "9", title: "Album 9", categories: [mockCategories[8]], createdAt: new Date(), updatedAt: new Date() },
    { id: "10", title: "Album 10", categories: [mockCategories[9]], createdAt: new Date(), updatedAt: new Date() },
];

//Mock Language
const mockLanguages: Language[] = [
    { id: "1", name: "English", thumbnail: "https://example.com/english_flag.jpg" },
    { id: "2", name: "Spanish", thumbnail: "https://example.com/spanish_flag.jpg" },
    { id: "3", name: "French", thumbnail: "https://example.com/french_flag.jpg" },
    { id: "4", name: "German", thumbnail: "https://example.com/german_flag.jpg" },
    { id: "5", name: "Chinese", thumbnail: "https://example.com/chinese_flag.jpg" },
    { id: "6", name: "Japanese", thumbnail: "https://example.com/japanese_flag.jpg" },
    { id: "7", name: "Italian", thumbnail: "https://example.com/italian_flag.jpg" },
    { id: "8", name: "Portuguese", thumbnail: "https://example.com/portuguese_flag.jpg" },
    { id: "9", name: "Russian", thumbnail: "https://example.com/russian_flag.jpg" },
    { id: "10", name: "Arabic", thumbnail: "https://example.com/arabic_flag.jpg" },
];
// Mock Books
const mockBooks: Book[] = [
    {
        title: "Book 1",
        language: mockLanguages[0],
        tags: [{ id: "1", name: "Tag 1" }],
        categories: [mockCategories[0]],
        artist: "Author 1",
        pictures: 5,
        thumb: "https://example.com/book1_thumb.jpg",
        albumUrl: "https://example.com/book1",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 2",
        language: mockLanguages[1],
        tags: [{ id: "2", name: "Tag 2" }],
        categories: [mockCategories[1]],
        artist: "Author 2",
        pictures: 7,
        thumb: "https://example.com/book2_thumb.jpg",
        albumUrl: "https://example.com/book2",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 3",
        language: mockLanguages[1],
        tags: [{ id: "3", name: "Tag 3" }],
        categories: [mockCategories[2]],
        artist: "Author 3",
        pictures: 10,
        thumb: "https://example.com/book3_thumb.jpg",
        albumUrl: "https://example.com/book3",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 4",
        language: mockLanguages[1],
        tags: [{ id: "4", name: "Tag 4" }],
        categories: [mockCategories[3]],
        artist: "Author 4",
        pictures: 8,
        thumb: "https://example.com/book4_thumb.jpg",
        albumUrl: "https://example.com/book4",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 5",
        language: mockLanguages[1],
        tags: [{ id: "5", name: "Tag 5" }],
        categories: [mockCategories[4]],
        artist: "Author 5",
        pictures: 6,
        thumb: "https://example.com/book5_thumb.jpg",
        albumUrl: "https://example.com/book5",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 6",
        language: mockLanguages[1],
        tags: [{ id: "6", name: "Tag 6" }],
        categories: [mockCategories[5]],
        artist: "Author 6",
        pictures: 9,
        thumb: "https://example.com/book6_thumb.jpg",
        albumUrl: "https://example.com/book6",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 7",
        language: mockLanguages[1],
        tags: [{ id: "7", name: "Tag 7" }],
        categories: [mockCategories[6]],
        artist: "Author 7",
        pictures: 4,
        thumb: "https://example.com/book7_thumb.jpg",
        albumUrl: "https://example.com/book7",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 8",
        language: mockLanguages[1],
        tags: [{ id: "8", name: "Tag 8" }],
        categories: [mockCategories[7]],
        artist: "Author 8",
        pictures: 6,
        thumb: "https://example.com/book8_thumb.jpg",
        albumUrl: "https://example.com/book8",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 9",
        language: mockLanguages[1],
        tags: [{ id: "9", name: "Tag 9" }],
        categories: [mockCategories[8]],
        artist: "Author 9",
        pictures: 8,
        thumb: "https://example.com/book9_thumb.jpg",
        albumUrl: "https://example.com/book9",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Book 10",
        language: mockLanguages[1],
        tags: [{ id: "10", name: "Tag 10" }],
        categories: [mockCategories[9]],
        artist: "Author 10",
        pictures: 5,
        thumb: "https://example.com/book10_thumb.jpg",
        albumUrl: "https://example.com/book10",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

// Mock Comments
const mockComments: Comment[] = [
    { id: "1", postId: "1", user: mockUsers[0], text: "Great album!", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", postId: "2", user: mockUsers[1], text: "Interesting book.", createdAt: new Date(), updatedAt: new Date() },
    { id: "3", postId: "3", user: mockUsers[2], text: "I love this album!", createdAt: new Date(), updatedAt: new Date() },
    { id: "4", postId: "4", user: mockUsers[3], text: "The plot is captivating.", createdAt: new Date(), updatedAt: new Date() },
    { id: "5", postId: "5", user: mockUsers[4], text: "Amazing artwork!", createdAt: new Date(), updatedAt: new Date() },
    { id: "6", postId: "6", user: mockUsers[5], text: "Can't wait to read it.", createdAt: new Date(), updatedAt: new Date() },
    { id: "7", postId: "7", user: mockUsers[6], text: "Informative content.", createdAt: new Date(), updatedAt: new Date() },
    { id: "8", postId: "8", user: mockUsers[7], text: "Historical accuracy.", createdAt: new Date(), updatedAt: new Date() },
    { id: "9", postId: "9", user: mockUsers[8], text: "Fascinating biography.", createdAt: new Date(), updatedAt: new Date() },
    { id: "10", postId: "10", user: mockUsers[9], text: "Scary but thrilling!", createdAt: new Date(), updatedAt: new Date() },
];

// Mock Replies
const mockReplies: Reply[] = [
    { id: "1", commentId: "1", commenter: mockUsers[1], user: mockUsers[2], text: "I agree!", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", commentId: "2", commenter: mockUsers[2], user: mockUsers[3], text: "Tell me more.", createdAt: new Date(), updatedAt: new Date() },
    { id: "3", commentId: "3", commenter: mockUsers[3], user: mockUsers[4], text: "Favorite track?", createdAt: new Date(), updatedAt: new Date() },
    { id: "4", commentId: "4", commenter: mockUsers[4], user: mockUsers[5], text: "Did you guess the ending?", createdAt: new Date(), updatedAt: new Date() },
    { id: "5", commentId: "5", commenter: mockUsers[5], user: mockUsers[6], text: "Who's the artist?", createdAt: new Date(), updatedAt: new Date() },
    { id: "6", commentId: "6", commenter: mockUsers[6], user: mockUsers[7], text: "Recommend other books?", createdAt: new Date(), updatedAt: new Date() },
    { id: "7", commentId: "7", commenter: mockUsers[7], user: mockUsers[8], text: "What's the subject?", createdAt: new Date(), updatedAt: new Date() },
    { id: "8", commentId: "8", commenter: mockUsers[8], user: mockUsers[9], text: "Any memorable scenes?", createdAt: new Date(), updatedAt: new Date() },
    { id: "9", commentId: "9", commenter: mockUsers[9], user: mockUsers[0], text: "Recommend more biographies.", createdAt: new Date(), updatedAt: new Date() },
    { id: "10", commentId: "10", commenter: mockUsers[0], user: mockUsers[1], text: "Favorite horror genre?", createdAt: new Date(), updatedAt: new Date() },
];
