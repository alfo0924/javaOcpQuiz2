document.addEventListener('DOMContentLoaded', function() {
    // 測驗問題數據
    const quizData = [
        {
            question: "以下哪個變數宣告是正確的？",
            code: "var arr1 = new int[]{};\nString[] arr2 = new String[]{};",
            options: [
                "代碼無法編譯",
                "會拋出 ClassCastException",
                "代碼可以編譯並且執行時會顯示 \"Inside\"",
                "代碼可以編譯但執行時不會顯示任何內容"
            ],
            answer: 2,
            explanation: "這是有效的代碼。arr1 是一個整數陣列，arr2 是一個字串陣列。在 Java 中，陣列是 Object 的子類型，因此 arr1 instanceof Object 會返回 true，所以會顯示 \"Inside\"。",
            category: "Working with Java data types"
        },
        {
            question: "以下代碼中，pageContent 的容量是多少？",
            code: "var cs = \"1234567890\";\nvar pageContent = new StringBuilder(cs);",
            options: [
                "16",
                "10",
                "26",
                "9"
            ],
            answer: 2,
            explanation: "當使用字串初始化 StringBuilder 時，容量會設置為字串長度 + 16。在這個例子中，cs 的長度是 10，所以 pageContent 的容量是 10 + 16 = 26。",
            category: "Working with Java data types"
        },
        {
            question: "以下哪個選項會輸出 \"MasterCard-xx89\"？",
            code: "var cardNumber = \"5134567891123589\";",
            options: [
                "System.out.println(\"MasterCard-xx\" + cardNumber.substring(cardNumber.length() - 2));",
                "System.out.println(\"MasterCard-xx\" + cardNumber.substring(14, 16));",
                "System.out.println(\"MasterCard-xx\" + cardNumber.substring(cardNumber.length() - 2, cardNumber.length()));",
                "以上都會輸出正確結果"
            ],
            answer: 3,
            explanation: "所有選項都會輸出 \"MasterCard-xx89\"。第一個選項使用 substring(int) 從索引 14 到字串結尾；第二個選項使用 substring(int, int) 從索引 14 到 16；第三個選項使用 substring(int, int) 從倒數第二個字符到結尾。",
            category: "Working with Java data types"
        },
        {
            question: "關於以下代碼，哪個陳述是正確的？",
            code: "class A {}\nclass B extends A {}\nclass MyExamCloud{\n  public static void main(String []args){\n    A aa = new B();\n    A bb = new B();\n    A aaa = new A();\n  }\n}",
            options: [
                "只有陳述 I 是正確的",
                "只有陳述 II 是正確的",
                "陳述 I 和 II 是正確的",
                "陳述 I 和 III 是正確的"
            ],
            answer: 3,
            explanation: "陳述 I：變數 aa 的對象類型是 B - 正確，aa 引用了一個 B 類型的對象。\n陳述 II：變數 bb 的引用類型是 B - 錯誤，bb 的引用類型是 A。\n陳述 III：變數 aaa 的對象類型是 A - 正確，aaa 引用了一個 A 類型的對象。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個方法可以插入到接口中？",
            code: "",
            options: [
                "default void method(){ }",
                "static int getSpeed() {return 10; }",
                "abstract int getSpeed();",
                "以上全部都可以"
            ],
            answer: 3,
            explanation: "從 Java 8 開始，接口可以包含默認方法（使用 default 關鍵字）、靜態方法和抽象方法。從 Java 9 開始，接口還可以包含私有方法。因此，所有列出的方法都可以在接口中定義。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "關於以下三個陳述，哪個是正確的？\nI. 在方法內部宣告的變數稱為類變數。\nII. 類變數會初始化為其默認值。\nIII. 宣告 \"short s = 10\" 中的變數 s 應該是實例變數。",
            code: "",
            options: [
                "只有 I",
                "只有 II",
                "只有 III",
                "I 和 II"
            ],
            answer: 1,
            explanation: "I：錯誤，在方法內部宣告的變數是局部變數，不是類變數。\nII：正確，類變數（靜態變數）會初始化為其默認值。\nIII：錯誤，變數 s 的類型取決於它的宣告位置，而不是它的值。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下代碼的輸出是什麼？",
            code: "class Ab{\n  void meth1(){ System.out.print(\" A B\"); }\n}\nclass Cd extends Ab{\n  protected void meth1()throws NullPointerException{\n    System.out.print(\" C D\");\n  }\n}\nclass MyExamCloud{\n  public static void main(String [] args){\n    Ab cd = new Cd();\n    cd.meth1();\n  }\n}",
            options: [
                "編譯失敗，有多個錯誤",
                "輸出 C D",
                "輸出 A B",
                "編譯失敗，因為第 8 行的錯誤，覆寫方法宣告了新的異常"
            ],
            answer: 1,
            explanation: "代碼可以成功編譯和執行。當調用 cd.meth1() 時，雖然 cd 的引用類型是 Ab，但實際對象類型是 Cd，所以會調用 Cd 類中的 meth1() 方法，輸出 \" C D\"。覆寫方法可以宣告與原方法相同或更少的已檢查異常，或任何未檢查的異常（如 NullPointerException）。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個面向對象的陳述描述了這兩個方法？",
            code: "public String getAccountNumber(String customerID) {}\npublic String getAccountNumber(String customerID, Data date) {}",
            options: [
                "方法重載",
                "方法覆寫",
                "多態性",
                "抽象化"
            ],
            answer: 0,
            explanation: "這是方法重載的例子。方法重載發生在同一個類中有多個方法具有相同的名稱但參數列表不同（參數數量或類型不同）。在這個例子中，兩個方法都叫 getAccountNumber，但第二個方法多了一個 Data date 參數。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "對於以下類集合，catch 塊的正確順序是什麼？",
            code: "class A extends Exception {}\nclass B extends A {}\nclass C extends B {}\n\ntry {\n  // codes\n}",
            options: [
                "Catch Exception, A, B, C",
                "Catch Exception, C, B, and A",
                "Catch A, B, C, and Exception",
                "Catch C, B, A and Exception"
            ],
            answer: 3,
            explanation: "當處理異常時，應該先捕獲最具體的異常，然後再捕獲更一般的異常。在這個例子中，C 是最具體的（它擴展了 B），B 擴展了 A，A 擴展了 Exception。因此，正確的順序是 C, B, A, Exception。",
            category: "Exception Handling"
        },
        {
            question: "以下代碼的輸出是什麼？",
            code: "import java.util.Optional;\nimport java.util.stream.Stream;\n\npublic class MyExamCloud{\n  public static void main(String[] args){\n    var strs = Stream.of(\"A\",\"B\",\"C\");\n    Optional opt = strs.limit(2).skip(1).findAny();\n    opt.ifPresent(System.out::print);\n  }\n}",
            options: [
                "A",
                "B",
                "沒有輸出",
                "拋出異常"
            ],
            answer: 1,
            explanation: "代碼創建了一個包含 \"A\", \"B\", \"C\" 的流。limit(2) 將流限制為前兩個元素（\"A\", \"B\"）。skip(1) 跳過第一個元素，只剩下 \"B\"。findAny() 返回流中的任何元素，在這種情況下只有 \"B\"。最後，ifPresent 方法檢查 Optional 是否有值，如果有，則打印它。因此，輸出是 \"B\"。",
            category: "Working with Streams and Lambda expressions"
        },
        {
            question: "Java 註解的用途有哪些？",
            code: "",
            options: [
                "它為編譯器提供信息",
                "軟件工具可以處理註解信息來生成代碼",
                "它提高了性能",
                "選項 A 和 B"
            ],
            answer: 3,
            explanation: "Java 註解的主要用途包括：\n1. 為編譯器提供信息 - 註解可以用來檢測錯誤或抑制警告\n2. 編譯時和部署時處理 - 軟件工具可以處理註解信息來生成代碼、XML 文件等\n3. 運行時處理 - 一些註解可以在運行時檢查\n\n註解本身不會提高性能或增強安全性。",
            category: "Annotations"
        },
        {
            question: "假設 con 是一個有效的 Connection（java.sql.Connection）對象。以下哪個選項會終止這個開放連接？",
            code: "",
            options: [
                "con.close();",
                "con.abort(Runnable::run);",
                "con.abort();",
                "con.close(Runnable::run);"
            ],
            answer: 1,
            explanation: "Connection 接口有兩個方法可以終止連接：close() 和 abort(Executor)。close() 方法會嘗試完成任何正在進行的查詢，而 abort(Executor) 方法會強制終止連接，不等待正在進行的操作完成。在這個例子中，Runnable::run 作為 Executor 傳遞給 abort 方法。con.abort() 不是有效的方法調用，因為 abort 方法需要一個 Executor 參數。",
            category: "Database Applications with JDBC"
        },
        {
            question: "以下代碼的輸出是什麼？",
            code: "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.function.BiFunction;\n\npublic class MyExamCloud{\n  public static void main(String[] args){\n    Map<Integer,String> numbers = new HashMap<Integer,String>();\n    numbers.put(1, \"one\");\n    numbers.put(3, \"Three\");\n    numbers.put(4, \"Four\");\n    BiFunction<Integer,String,String> func = (k,v) -> \"Two\";\n    numbers.compute(2, func);\n    System.out.println(numbers);\n  }\n}",
            options: [
                "{1=one, 2=Two, 3=Three, 4=Four}",
                "{1=one, 3=Three, 4=Four}",
                "{1=one, 2=null, 3=Three, 4=Four}",
                "代碼無法編譯"
            ],
            answer: 0,
            explanation: "代碼使用 Map.compute 方法計算鍵 2 的新值。BiFunction 接受鍵和現有值（如果有的話）作為參數，並返回新值。在這個例子中，函數總是返回 \"Two\"。由於鍵 2 之前不存在於映射中，所以它會被添加，值為 \"Two\"。因此，輸出是 {1=one, 2=Two, 3=Three, 4=Four}。",
            category: "Working with Streams and Lambda expressions"
        },
        {
            question: "什麼類型的語句可以用來編寫以下方程式：y = (m*x) + b？",
            code: "",
            options: [
                "條件語句",
                "賦值語句",
                "斷言語句",
                "以上都不是"
            ],
            answer: 1,
            explanation: "方程式 y = (m*x) + b 是一個賦值語句，它計算表達式 (m*x) + b 的值並將結果賦給變數 y。在 Java 中，這將寫成 y = (m*x) + b;",
            category: "Working with Java data types"
        },
        {
            question: "涉及 byte、int 和字面數字的表達式會被提升為以下哪種類型？",
            code: "",
            options: [
                "int",
                "long",
                "byte",
                "float"
            ],
            answer: 0,
            explanation: "在 Java 中，當不同類型的原始數據類型一起使用時，表達式會被提升為範圍最大的類型。在 byte、int 和字面數字（默認為 int）之間，int 的範圍最大，所以表達式會被提升為 int 類型。",
            category: "Working with Java data types"
        },
        {
            question: "在模塊描述符中，對於隱含的可讀性，應該使用以下哪個指令？",
            code: "",
            options: [
                "requires",
                "requires from",
                "requires transitive",
                "exports"
            ],
            answer: 2,
            explanation: "在 Java 模塊系統中，'requires transitive' 指令用於實現隱含的可讀性。當模塊 A 使用 'requires transitive B' 時，任何需要模塊 A 的模塊也會隱含地讀取模塊 B，而不需要顯式地要求它。",
            category: "Java Platform Module System"
        },
        {
            question: "哪個語句可以指定你的文件屬於包 com.ocaexam.utilities？",
            code: "",
            options: [
                "Pack com.ocaexam.utilities;",
                "Package com ocaexam.utilities.*",
                "Package com.ocaexam.utitlies.*",
                "Package com.ocaexam.utlities;"
            ],
            answer: 3,
            explanation: "在 Java 中，包聲明使用 'package' 關鍵字，後跟包名和分號。正確的語法是 'package com.ocaexam.utilities;'。選項 D 中有拼寫錯誤（utlities 而不是 utilities），但語法結構是正確的。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "在 Java 中輸出 \"Hello World\" 的正確語法是什麼？",
            code: "",
            options: [
                "System.out.println(\"Hello World\");",
                "echo (\"Hello World\");",
                "print(\"Hello World\");",
                "Console.WriteLine(\"Hello World\");"
            ],
            answer: 0,
            explanation: "在 Java 中，標準輸出使用 System.out.println() 方法。echo 是 shell 腳本中的命令，print 是 Python 中的函數，Console.WriteLine 是 C# 中的方法。",
            category: "Working with Java data types"
        },
        {
            question: "以下代碼的輸出是什麼？",
            code: "public class Test {\n  public static void main(String[] args) {\n    int[] array = {6, 9, 8};\n    List<Integer> list = new ArrayList<>();\n    list.add(array[0]);\n    list.add(array[2]);\n    list.set(1, array[1]);\n    list.remove(0);\n    System.out.println(list);\n  }\n}",
            options: [
                "[9]",
                "[6, 9]",
                "[8, 9]",
                "[9, 8]"
            ],
            answer: 0,
            explanation: "代碼創建了一個包含 array[0]（值為 6）和 array[2]（值為 8）的列表。然後將索引 1 處的值設置為 array[1]（值為 9），所以列表變成 [6, 9]。最後，移除索引 0 處的元素（值為 6），所以列表變成 [9]。因此，輸出是 [9]。",
            category: "Working with Arrays and Collections"
        },
        {
            question: "關於 Java 中的泛型，以下哪個陳述是正確的？",
            code: "",
            options: [
                "泛型只能用於集合類",
                "泛型可以與原始數據類型一起使用",
                "泛型提供編譯時類型安全",
                "泛型信息在運行時可用"
            ],
            answer: 2,
            explanation: "泛型提供編譯時類型安全，允許編譯器檢測類型不匹配的錯誤。泛型不僅限於集合類，可以用於任何類或接口。由於類型擦除，泛型信息在運行時不可用。泛型不能與原始數據類型一起使用，只能與引用類型一起使用。",
            category: "Working with Arrays and Collections"
        },
        {
            question: "以下哪個是 Java 中的功能性接口？",
            code: "",
            options: [
                "Runnable",
                "ArrayList",
                "String",
                "Integer"
            ],
            answer: 0,
            explanation: "功能性接口是只有一個抽象方法的接口。Runnable 是一個功能性接口，因為它只有一個抽象方法 run()。ArrayList 是一個具體類，String 和 Integer 也是具體類，不是接口。",
            category: "Working with Streams and Lambda expressions"
        },
        {
            question: "在 Java 中，以下哪個選項可以用來創建不可變類？",
            code: "",
            options: [
                "將所有字段聲明為 final",
                "不提供 setter 方法",
                "確保所有可變組件不能被修改",
                "以上全部"
            ],
            answer: 3,
            explanation: "創建不可變類的策略包括：\n1. 將類聲明為 final，防止子類化\n2. 將所有字段聲明為 private final\n3. 不提供 setter 方法\n4. 如果類包含可變對象引用，不要直接返回它們\n5. 如果需要修改對象的狀態，返回一個新對象\n\n所有列出的選項都是創建不可變類的重要部分。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個不是 Java 中的有效註解？",
            code: "",
            options: [
                "@Override",
                "@Deprecated",
                "@SuppressWarnings",
                "@NotNull"
            ],
            answer: 3,
            explanation: "@Override、@Deprecated 和 @SuppressWarnings 是 Java 標準庫中的內置註解。@NotNull 不是 Java 標準庫的一部分，它是一些框架（如 JetBrains 註解或 Jakarta Bean Validation）提供的註解。",
            category: "Annotations"
        },
        {
            question: "以下哪個是 Java 中處理文件的正確方式？",
            code: "",
            options: [
                "使用 java.io.File 類",
                "使用 java.nio.file.Path 接口",
                "使用 java.nio.file.Files 類的靜態方法",
                "以上全部"
            ],
            answer: 3,
            explanation: "Java 提供了多種處理文件的方式：\n1. java.io.File 類是傳統的文件處理方式\n2. java.nio.file.Path 接口代表文件系統中的路徑\n3. java.nio.file.Files 類提供了處理文件的靜態方法\n\n這些都是有效的文件處理方式，具體選擇取決於需求。",
            category: "Java I/O API"
        },
        {
            question: "在 Java 中，以下哪個選項可以用來創建多線程應用程序？",
            code: "",
            options: [
                "實現 Runnable 接口",
                "擴展 Thread 類",
                "實現 Callable 接口",
                "以上全部"
            ],
            answer: 3,
            explanation: "Java 提供了多種創建線程的方式：\n1. 實現 Runnable 接口並將其傳遞給 Thread 構造函數\n2. 擴展 Thread 類並覆寫 run 方法\n3. 實現 Callable 接口並將其提交給 ExecutorService\n\n這些都是有效的創建線程的方式，具體選擇取決於需求。",
            category: "Concurrency"
        },
        {
            question: "以下哪個不是 Java 中的有效訪問修飾符？",
            code: "",
            options: [
                "public",
                "private",
                "protected",
                "friend"
            ],
            answer: 3,
            explanation: "Java 中的訪問修飾符包括：\n1. public - 可以從任何地方訪問\n2. protected - 可以從同一包或子類訪問\n3. private - 只能從同一類訪問\n4. 默認（無修飾符）- 可以從同一包訪問\n\nfriend 不是 Java 中的訪問修飾符，它是 C++ 中的概念。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個是 Java 中的檢查型異常？",
            code: "",
            options: [
                "NullPointerException",
                "ArrayIndexOutOfBoundsException",
                "IOException",
                "IllegalArgumentException"
            ],
            answer: 2,
            explanation: "檢查型異常是必須在代碼中顯式處理的異常，要麼使用 try-catch 塊捕獲，要麼在方法簽名中使用 throws 子句聲明。\n\nIOException 是一個檢查型異常。NullPointerException、ArrayIndexOutOfBoundsException 和 IllegalArgumentException 都是非檢查型異常（運行時異常），不需要顯式處理。",
            category: "Exception Handling"
        },
        {
            question: "以下哪個是 Java 中的有效變數名？",
            code: "",
            options: [
                "123abc",
                "_variable",
                "class",
                "for-loop"
            ],
            answer: 1,
            explanation: "Java 變數名規則：\n1. 必須以字母、下劃線或美元符號開頭\n2. 後續字符可以是字母、數字、下劃線或美元符號\n3. 不能使用 Java 關鍵字\n4. 不能包含連字符或空格\n\n123abc 不符合規則 1，class 是 Java 關鍵字，for-loop 包含連字符。_variable 是有效的變數名。",
            category: "Working with Java data types"
        },
        {
            question: "以下哪個是 Java 中的有效方法覆寫？",
            code: "class Parent {\n  protected void display() {\n    System.out.println(\"Parent\");\n  }\n}\n\nclass Child extends Parent {\n  // 選項\n}",
            options: [
                "private void display() { System.out.println(\"Child\"); }",
                "protected void display() { System.out.println(\"Child\"); }",
                "protected int display() { System.out.println(\"Child\"); return 0; }",
                "public static void display() { System.out.println(\"Child\"); }"
            ],
            answer: 1,
            explanation: "方法覆寫規則：\n1. 方法名和參數列表必須相同\n2. 返回類型必須相同或是協變的（子類型）\n3. 訪問修飾符不能比父類方法更嚴格\n4. 不能拋出比父類方法更廣泛的已檢查異常\n5. 靜態方法不能被覆寫\n\n選項 A 違反了規則 3，選項 C 違反了規則 2，選項 D 違反了規則 5。選項 B 是有效的方法覆寫。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個是 Java 中的有效 lambda 表達式？",
            code: "",
            options: [
                "(a, b) -> { return a + b; }",
                "a, b -> a + b",
                "a, b => a + b",
                "(a, b) => { return a + b; }"
            ],
            answer: 0,
            explanation: "Lambda 表達式語法：\n1. 參數列表在括號中\n2. 箭頭 -> 分隔參數和主體\n3. 主體可以是表達式或語句塊\n\n選項 A 是有效的 lambda 表達式。選項 B 缺少括號，選項 C 和 D 使用了錯誤的箭頭符號（=>）。",
            category: "Working with Streams and Lambda expressions"
        },
        {
            question: "以下哪個是 Java 中的有效枚舉聲明？",
            code: "",
            options: [
                "enum Season { SPRING, SUMMER, FALL, WINTER }",
                "enum Season { SPRING, SUMMER, FALL, WINTER; private int value; }",
                "enum Season { SPRING(1), SUMMER(2), FALL(3), WINTER(4); private int value; }",
                "以上全部"
            ],
            answer: 3,
            explanation: "Java 枚舉可以有多種形式：\n1. 簡單枚舉常量列表\n2. 帶有字段和方法的枚舉\n3. 帶有構造函數的枚舉\n\n所有列出的選項都是有效的枚舉聲明。選項 C 需要一個構造函數來初始化 value 字段，但這是有效的 Java 語法。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個是 Java 中的有效接口方法（Java 8 及以上）？",
            code: "",
            options: [
                "void display();",
                "default void display() { System.out.println(\"Default\"); }",
                "static void display() { System.out.println(\"Static\"); }",
                "以上全部"
            ],
            answer: 3,
            explanation: "從 Java 8 開始，接口可以包含：\n1. 抽象方法（沒有主體）\n2. 默認方法（使用 default 關鍵字，有主體）\n3. 靜態方法（使用 static 關鍵字，有主體）\n\n從 Java 9 開始，接口還可以包含私有方法。所有列出的選項都是有效的接口方法。",
            category: "Java Object-Oriented Approach"
        },
        {
            question: "以下哪個是 Java 中的有效 try-with-resources 語句？",
            code: "",
            options: [
                "try (FileReader fr = new FileReader(\"file.txt\")) { }",
                "try (FileReader fr = new FileReader(\"file.txt\"); BufferedReader br = new BufferedReader(fr)) { }",
                "try (FileReader fr = new FileReader(\"file.txt\")) { } finally { fr.close(); }",
                "以上全部"
            ],
            answer: 3,
            explanation: "try-with-resources 語句可以有多種形式：\n1. 單個資源\n2. 多個資源\n3. 帶有 finally 塊\n\n所有列出的選項都是有效的 try-with-resources 語句。資源必須實現 AutoCloseable 接口，FileReader 和 BufferedReader 都實現了這個接口。",
            category: "Exception Handling"
        },
        {
            question: "以下哪個是 Java 中的有效 Stream 操作？",
            code: "",
            options: [
                "stream.filter(s -> s.length() > 2).forEach(System.out::println)",
                "stream.map(String::toUpperCase).collect(Collectors.toList())",
                "stream.sorted().limit(3).toArray(String[]::new)",
                "以上全部"
            ],
            answer: 3,
            explanation: "Java Stream API 提供了多種操作：\n1. 中間操作（如 filter、map、sorted、limit）返回一個新的流\n2. 終端操作（如 forEach、collect、toArray）產生結果\n\n所有列出的選項都是有效的 Stream 操作組合。",
            category: "Working with Streams and Lambda expressions"
        },
        {
            question: "以下哪個是 Java 中的有效模塊聲明？",
            code: "",
            options: [
                "module com.example.app { }",
                "module com.example.app { requires java.base; }",
                "module com.example.app { exports com.example.app.api; }",
                "以上全部"
            ],
            answer: 3,
            explanation: "Java 模塊系統（從 Java 9 開始）允許多種模塊聲明：\n1. 簡單模塊名稱\n2. 帶有依賴的模塊\n3. 帶有導出包的模塊\n\n所有列出的選項都是有效的模塊聲明。",
            category: "Java Platform Module System"
        }
    ];

    // DOM 元素
    const quizContainer = document.getElementById('quiz-container');
    const questionCounter = document.getElementById('current-question');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const scoreSection = document.getElementById('score-section');
    const quizSection = document.getElementById('quiz-section');
    const resultsSection = document.getElementById('results-section');
    const scoreElement = document.getElementById('score');
    const totalQuestionsElement = document.getElementById('total-questions');
    const progressFill = document.getElementById('progress-fill');
    const scorePercentage = document.getElementById('score-percentage');
    const analysisElement = document.getElementById('analysis');
    const resultsContainer = document.getElementById('results-container');
    const retryBtn = document.getElementById('retry-btn');
    const backToTopBtn = document.getElementById('back-to-top');

    // 狀態變數
    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizData.length).fill(null);
    let quizSubmitted = false;

    // 初始化測驗
    function initQuiz() {
        totalQuestionsElement.textContent = quizData.length;
        renderQuestion();
        updateNavButtons();
    }

    // 渲染當前問題
    function renderQuestion() {
        const question = quizData[currentQuestionIndex];
        questionCounter.textContent = currentQuestionIndex + 1;

        let questionHTML = `
            <div class="question">
                <div class="question-title">${currentQuestionIndex + 1}. ${question.question}</div>
        `;

        if (question.code && question.code.trim() !== '') {
            questionHTML += `<pre class="code-block">${question.code}</pre>`;
        }

        questionHTML += `<ul class="options">`;

        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === index;
            const selectedClass = isSelected ? 'selected' : '';

            let resultClass = '';
            if (quizSubmitted) {
                if (index === question.answer) {
                    resultClass = 'correct';
                } else if (isSelected && index !== question.answer) {
                    resultClass = 'incorrect';
                }
            }

            questionHTML += `
                <li class="option ${selectedClass} ${resultClass}" data-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </li>
            `;
        });

        questionHTML += `</ul>`;

        if (quizSubmitted) {
            questionHTML += `
                <div class="explanation">
                    <strong>解釋：</strong> ${question.explanation}
                </div>
            `;
        }

        questionHTML += `</div>`;

        quizContainer.innerHTML = questionHTML;

        // 如果測驗未提交，添加選項點擊事件
        if (!quizSubmitted) {
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function() {
                    selectOption(parseInt(this.dataset.index));
                });
            });
        }
    }

    // 選擇選項
    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        renderQuestion();
        updateNavButtons();
    }

    // 更新導航按鈕狀態
    function updateNavButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;

        if (currentQuestionIndex === quizData.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }

        // 檢查是否所有問題都已回答
        const allAnswered = userAnswers.every(answer => answer !== null);
        submitBtn.disabled = !allAnswered;
    }

    // 上一題
    function goToPrevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
            updateNavButtons();
        }
    }

    // 下一題
    function goToNextQuestion() {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
            updateNavButtons();
        }
    }

    // 提交測驗
    function submitQuiz() {
        quizSubmitted = true;

        // 計算分數
        const score = calculateScore();
        const percentage = Math.round((score / quizData.length) * 100);

        // 更新 UI
        scoreElement.textContent = score;
        progressFill.style.width = `${percentage}%`;
        scorePercentage.textContent = `${percentage}%`;

        // 分析結果
        analyzeResults();

        // 顯示詳細結果
        renderResults();

        // 切換視圖
        quizSection.classList.add('hidden');
        scoreSection.classList.remove('hidden');
        resultsSection.classList.remove('hidden');

        // 滾動到頂部
        window.scrollTo(0, 0);
    }

    // 計算分數
    function calculateScore() {
        return userAnswers.reduce((score, answer, index) => {
            return answer === quizData[index].answer ? score + 1 : score;
        }, 0);
    }

    // 分析結果
    function analyzeResults() {
        // 按類別分組錯誤
        const categoryErrors = {};
        const categoryTotals = {};

        quizData.forEach((question, index) => {
            const category = question.category;

            if (!categoryTotals[category]) {
                categoryTotals[category] = 0;
                categoryErrors[category] = 0;
            }

            categoryTotals[category]++;

            if (userAnswers[index] !== question.answer) {
                categoryErrors[category]++;
            }
        });

        // 計算每個類別的錯誤率
        const categoryErrorRates = {};
        for (const category in categoryTotals) {
            categoryErrorRates[category] = categoryErrors[category] / categoryTotals[category];
        }

        // 找出最強和最弱的類別
        let strengths = [];
        let weaknesses = [];

        for (const category in categoryErrorRates) {
            const errorRate = categoryErrorRates[category];
            const total = categoryTotals[category];

            if (errorRate === 0) {
                strengths.push({ category, total });
            } else if (errorRate >= 0.5) {
                weaknesses.push({ category, errorRate, total });
            }
        }

        // 按總數排序
        strengths.sort((a, b) => b.total - a.total);
        weaknesses.sort((a, b) => b.errorRate - a.errorRate);

        // 生成分析 HTML
        let analysisHTML = '';

        if (strengths.length > 0) {
            analysisHTML += '<h3>強項：</h3>';
            strengths.forEach(item => {
                analysisHTML += `
                    <div class="analysis-item strength">
                        <strong>${item.category}</strong>: 全部答對 (${item.total} 題)
                    </div>
                `;
            });
        }

        if (weaknesses.length > 0) {
            analysisHTML += '<h3>需要加強：</h3>';
            weaknesses.forEach(item => {
                const errorPercentage = Math.round(item.errorRate * 100);
                analysisHTML += `
                    <div class="analysis-item weakness">
                        <strong>${item.category}</strong>: 錯誤率 ${errorPercentage}% (${Math.round(item.errorRate * item.total)}/${item.total} 題)
                    </div>
                `;
            });
        }

        analysisElement.innerHTML = analysisHTML;
    }

    // 渲染詳細結果
    function renderResults() {
        let resultsHTML = '';

        quizData.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.answer;
            const statusClass = isCorrect ? 'correct' : 'incorrect';
            const statusText = isCorrect ? '正確' : '錯誤';

            resultsHTML += `
                <div class="result-item">
                    <div class="result-header">
                        <h3>問題 ${index + 1}</h3>
                        <span class="result-status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="question-title">${question.question}</div>
            `;

            if (question.code && question.code.trim() !== '') {
                resultsHTML += `<pre class="code-block">${question.code}</pre>`;
            }

            resultsHTML += `<ul class="options">`;

            question.options.forEach((option, optIndex) => {
                let optionClass = '';

                if (optIndex === question.answer) {
                    optionClass = 'correct';
                } else if (userAnswer === optIndex) {
                    optionClass = 'incorrect';
                }

                resultsHTML += `
                    <li class="option ${optionClass}">
                        ${String.fromCharCode(65 + optIndex)}. ${option}
                    </li>
                `;
            });

            resultsHTML += `</ul>`;

            resultsHTML += `
                    <div class="explanation">
                        <strong>解釋：</strong> ${question.explanation}
                    </div>
                </div>
            `;
        });

        resultsContainer.innerHTML = resultsHTML;
    }

    // 重新測驗
    function retryQuiz() {
        currentQuestionIndex = 0;
        userAnswers = new Array(quizData.length).fill(null);
        quizSubmitted = false;

        quizSection.classList.remove('hidden');
        scoreSection.classList.add('hidden');
        resultsSection.classList.add('hidden');

        renderQuestion();
        updateNavButtons();
    }

    // 回到頂部
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 事件監聽器
    prevBtn.addEventListener('click', goToPrevQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    retryBtn.addEventListener('click', retryQuiz);
    backToTopBtn.addEventListener('click', scrollToTop);

    // 初始化測驗
    initQuiz();
});
