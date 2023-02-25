const data = [
  {
    "id": 1,
    "link":"article-1",
    "title": "The Benefits of Yoga for Stress Relief",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"thoughts",
    "cover":"https://source.unsplash.com/random/?yoga/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 2,
    "link":"article-2",
    "title": "The Top 5 Destinations for Digital Nomads",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"tips",
    "cover":"https://source.unsplash.com/random/?digital/",

    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 3,
    "link":"article-3",
    "title": "How to Build a Successful E-commerce Business",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"tips",
    "cover":"https://source.unsplash.com/random/?ecommerce/",

    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 4,
    "link":"article-4",
    "title": "Why You Should Travel Alone At Least Once In Your Life",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"thoughts",
    "cover":"https://source.unsplash.com/random/?travel/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 5,
    "link":"article-5",
    "title": "Story 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh,",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"story",
    "cover":"https://source.unsplash.com/random/?lorem ipsum/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 6,
    "link":"article-6",
    "title": "Story 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh,",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"story",
    "cover":"https://source.unsplash.com/random/?lorem ipsum/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 7,
    "link":"article-7",
    "title": "Story 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh,",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"story",
    "cover":"https://source.unsplash.com/random/?lorem ipsum/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 8,
    "link":"article-8",
    "title": "Story 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh,",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"story",
    "cover":"https://source.unsplash.com/random/?lorem ipsum/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 9,
    "link":"article-9",
    "title": "Story 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh,",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"story",
    "cover":"https://source.unsplash.com/random/?lorem ipsum/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 10,
    "link":"article-10",
    "title": "Story 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh,",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"story",
    "cover":"https://source.unsplash.com/random/?lorem ipsum/",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 11,
    "link":"article-11",
    "title": "How to Build a Successful E-commerce Business",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"tips",
    "cover":"https://source.unsplash.com/random/?ecommerce/",

    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 12,
    "link":"article-12",
    "title": "How to Build a Successful E-commerce Business",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"tips",
    "cover":"https://source.unsplash.com/random/?ecommerce/",

    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 13,
    "link":"article-13",
    "title": "How to Build a Successful E-commerce Business",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"tips",
    "cover":"https://source.unsplash.com/random/?ecommerce/",

    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
  {
    "id": 14,
    "link":"article-14",
    "title": "How to Build a Successful E-commerce Business",
    "author": "Mohd Usman",
    "date": "2022-02-15",
    "category":"tips",
    "cover":"https://source.unsplash.com/random/?ecommerce/",

    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida quam vel massa dapibus, sit amet placerat lacus viverra. Nulla facilisi. Phasellus tristique euismod nibh, at viverra nisi pharetra eu. Suspendisse potenti. Nam vel dolor diam. Donec suscipit quam nec risus feugiat sagittis. Mauris aliquam efficitur neque quis faucibus. Praesent ac consectetur lorem."
  },
]
export default data;