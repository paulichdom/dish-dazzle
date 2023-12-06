export type Recipe = {
    title: string;
    dateCreated: string;
    authorId: string;
    instructions: string[];
    tags: string[];
};


export const recipes = [
    {
        title: "Grilled Beef Steak and Asparagus",
        dateCreated: "2023-01-01",
        authorId: "yDk0b0ZOc3SfSzSdErsaBjkLm813",
        instructions: ["Make the steak seasoning", "Make the herb butter", "Prep the steaks", "Cut asparagus woody ends"],
        tags: ["Beef", "Steak", "Asparagus", "Grill"],
    },
    {
        title: "Roasted Chicken with Lemon and Rosemary",
        dateCreated: "2023-01-02",
        authorId: "zAe1x1YOp2XcWwWqQdEfRbNn742",
        instructions: ["Marinate the chicken", "Roast with lemon and rosemary", "Serve hot"],
        tags: ["Chicken", "Roast", "Lemon", "Rosemary"],
    },
    {
        title: "Vegetarian Pasta Primavera",
        dateCreated: "2023-01-03",
        authorId: "xYz9aBc8Mn0pQqRwZvXcHnLk543",
        instructions: ["Boil pasta", "Sauté vegetables", "Mix with pasta", "Garnish with Parmesan"],
        tags: ["Vegetarian", "Pasta", "Primavera", "Vegetables"],
    },
    {
        title: "Grilled Salmon with Dill Sauce",
        dateCreated: "2023-01-04",
        authorId: "aBc1dEf2Gh3Ij4Kl5Mn6Op7Qr8",
        instructions: ["Season the salmon", "Grill to perfection", "Prepare dill sauce"],
        tags: ["Salmon", "Grill", "Dill"],
    },
    {
        title: "Mushroom Risotto",
        dateCreated: "2023-01-05",
        authorId: "bCd2eFg3Hi4Jk5Lm6Np7Qr8Ss9",
        instructions: ["Sauté mushrooms", "Cook Arborio rice", "Stir in broth gradually"],
        tags: ["Mushroom", "Risotto", "Italian"],
    },
    {
        title: "Crispy Baked Potato Wedges",
        dateCreated: "2023-01-06",
        authorId: "cDe3fGh4Ij5Kl6Mn7Op8Qr9Ss0",
        instructions: ["Cut potatoes into wedges", "Coat with olive oil and spices", "Bake until crispy"],
        tags: ["Potato", "Baked", "Snack"],
    },
    {
        title: "Shrimp Scampi Pasta",
        dateCreated: "2023-01-07",
        authorId: "dEf4Gh5Ij6Kl7Mn8Op9Qr0Ss1",
        instructions: ["Sauté shrimp in garlic butter", "Cook pasta al dente", "Combine and toss"],
        tags: ["Shrimp", "Scampi", "Pasta"],
    },
    {
        title: "Barbecue Pulled Pork Sandwiches",
        dateCreated: "2023-01-08",
        authorId: "eFg5hIj6Kl7Mn8Op9Qr0Ss1Tt2",
        instructions: ["Slow-cook pork with barbecue sauce", "Shred and assemble sandwiches"],
        tags: ["Pulled Pork", "Barbecue", "Sandwich"],
    },
    {
        title: "Caprese Salad with Balsamic Glaze",
        dateCreated: "2023-01-09",
        authorId: "fGh6Ij7Kl8Mn9Op0Qr1Ss2Tt3",
        instructions: ["Slice tomatoes and mozzarella", "Arrange on a plate", "Drizzle with balsamic glaze"],
        tags: ["Caprese", "Salad", "Italian"],
    },
    {
        title: "Teriyaki Glazed Chicken Skewers",
        dateCreated: "2023-01-10",
        authorId: "gHj7Kl8Mn9Op0Qr1Ss2Tt3Uu4",
        instructions: ["Marinate chicken in teriyaki sauce", "Skewer and grill until cooked"],
        tags: ["Chicken", "Teriyaki", "Skewers"],
    },
    {
        title: "Spaghetti Carbonara",
        dateCreated: "2023-01-11",
        authorId: "hIj8Kl9Mn0Op1Qr2Ss3Tt4Uu5",
        instructions: ["Cook pasta", "Sauté pancetta and garlic", "Toss with beaten eggs and Parmesan"],
        tags: ["Spaghetti", "Carbonara", "Italian"],
    },
    {
        title: "Honey Glazed Carrots",
        dateCreated: "2023-01-12",
        authorId: "iJk9Lm0Op1Qr2Ss3Tt4Uu5Vv6",
        instructions: ["Steam carrots until tender", "Glaze with honey and butter", "Serve as a side"],
        tags: ["Carrots", "Honey Glazed", "Side Dish"],
    },
    {
        title: "Cajun Blackened Catfish",
        dateCreated: "2023-01-13",
        authorId: "jKl0Mn1Op2Qr3Ss4Tt5Uu6Vv7",
        instructions: ["Coat catfish with Cajun seasoning", "Sear in a hot skillet", "Serve with lemon wedges"],
        tags: ["Catfish", "Cajun", "Seafood"],
    },
    {
        title: "Greek Salad with Tzatziki Dressing",
        dateCreated: "2023-01-14",
        authorId: "kLm1Op2Qr3Ss4Tt5Uu6Vv7Ww8",
        instructions: ["Chop cucumbers, tomatoes, and feta", "Drizzle with tzatziki dressing", "Sprinkle with olives"],
        tags: ["Greek Salad", "Tzatziki", "Vegetarian"],
    },
    {
        title: "Stuffed Bell Peppers with Quinoa",
        dateCreated: "2023-01-15",
        authorId: "mNn2Op3Qr4Ss5Tt6Uu7Vv8Ww9",
        instructions: ["Prepare quinoa", "Mix with vegetables and stuff peppers", "Bake until peppers are tender"],
        tags: ["Stuffed Peppers", "Quinoa", "Vegetarian"],
    },
    {
        title: "Maple Glazed Bacon-Wrapped Brussels Sprouts",
        dateCreated: "2023-01-16",
        authorId: "nOp3Qr4Ss5Tt6Uu7Vv8Ww9Xx0",
        instructions: ["Wrap Brussels sprouts in bacon", "Drizzle with maple glaze", "Roast until crispy"],
        tags: ["Brussels Sprouts", "Bacon-Wrapped", "Maple Glazed"],
    },
    {
        title: "Lemon Blueberry Cheesecake",
        dateCreated: "2023-01-17",
        authorId: "oP4Qr5Ss6Tt7Uu8Vv9Ww0Xx1Yy2",
        instructions: ["Prepare graham cracker crust", "Mix cream cheese, sugar, and lemon zest", "Bake until set"],
        tags: ["Cheesecake", "Lemon", "Blueberry"],
    },
    {
        title: "Tomato Basil Bruschetta",
        dateCreated: "2023-01-18",
        authorId: "pQr5Ss6Tt7Uu8Vv9Ww0Xx1Yy2Zz3",
        instructions: ["Dice tomatoes and basil", "Combine with olive oil and balsamic vinegar", "Serve on toasted bread"],
        tags: ["Bruschetta", "Tomato", "Basil"],
    },
    {
        title: "Pesto Shrimp Linguine",
        dateCreated: "2023-01-19",
        authorId: "qSs6Tt7Uu8Vv9Ww0Xx1Yy2Zz3Aa4",
        instructions: ["Cook linguine", "Sauté shrimp in pesto sauce", "Toss with pasta"],
        tags: ["Shrimp", "Pesto", "Linguine"],
    },
    {
        title: "Teriyaki Veggie Stir-Fry",
        dateCreated: "2023-01-20",
        authorId: "sTt7Uu8Vv9Ww0Xx1Yy2Zz3Aa4Bb5",
        instructions: ["Stir-fry mixed vegetables in teriyaki sauce", "Serve over rice or noodles"],
        tags: ["Vegetarian", "Teriyaki", "Stir-Fry"],
    },
];
