(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{385:function(v,a,_){v.exports=_.p+"assets/img/fairSync.2a08cdfe.png"},466:function(v,a,_){"use strict";_.r(a);var t=_(28),e=Object(t.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"linux-中的内核态和用户态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-中的内核态和用户态"}},[v._v("#")]),v._v(" Linux 中的内核态和用户态")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("操作系统需要两种CPU状态：")]),v._v(" "),t("ul",[t("li",[v._v("内核态（Kernel Mode）：运行操作系统程序")]),v._v(" "),t("li",[v._v("用户态（User Mode）：运行用户程序")])])]),v._v(" "),t("li",[t("p",[v._v("指令划分：")]),v._v(" "),t("ul",[t("li",[v._v("特权指令：只能由操作系统使用、用户程序不能使用的指令。 举例：启动 I/O 内存清零 修改程序状态字 设置时钟 允许/禁止终端 停机")]),v._v(" "),t("li",[v._v("非特权指令：用户程序可以使用的指令。 举例：控制转移 算数运算 取数指令 访管指令（使用户程序从用户态陷入内核态）")])])]),v._v(" "),t("li",[t("p",[v._v("特权级别：")]),v._v(" "),t("ul",[t("li",[v._v("特权环：R0、R1、R2和R3")]),v._v(" "),t("li",[v._v("R0相当于内核态，R3相当于用户态；")]),v._v(" "),t("li",[v._v("不同级别能够运行不同的指令集合；")])])]),v._v(" "),t("li",[t("p",[v._v("CPU状态之间的转换：")]),v._v(" "),t("ul",[t("li",[v._v("用户态---\x3e内核态：唯一途径是通过中断、异常、陷入机制（访管指令）")]),v._v(" "),t("li",[v._v("内核态---\x3e用户态：设置程序状态字PSW")])])]),v._v(" "),t("li",[t("p",[v._v("内核态与用户态的区别")]),v._v(" "),t("ul",[t("li",[v._v("内核态与用户态是操作系统的两种运行级别，当程序运行在 3 级特权级上时，就可以称之为运行在用户态。因为这是最低特权级，是普通的用户进程运行的特权级，大部分用户直接面对的程序都是运行在用户态；")]),v._v(" "),t("li",[v._v("当程序运行在 0 级特权级上时，就可以称之为运行在内核态。")]),v._v(" "),t("li",[v._v("运行在用户态下的程序不能直接访问操作系统内核数据结构和程序。当我们在系统中执行一个程序时，大部分时间是运行在用户态下的，在其需要操作系统帮助完成某些它没有权力和能力完成的工作时就会切换到内核态。")]),v._v(" "),t("li",[v._v("这两种状态的主要差别是：\n"),t("ul",[t("li",[v._v("处于用户态执行时，进程所能访问的内存空间和对象受到限制，其所处于占有的处理机是可被抢占的；")]),v._v(" "),t("li",[v._v("而处于核心态执行中的进程，则能访问所有的内存空间和对象，且所占有的处理机是不允许被抢占的。")])])])])]),v._v(" "),t("li",[t("p",[v._v("通常来说，以下三种情况会导致用户态到内核态的切换")]),v._v(" "),t("ul",[t("li",[v._v("系统调用\n"),t("ul",[t("li",[v._v("这是用户态进程主动要求切换到内核态的一种方式，用户态进程通过系统调用申请使用操作系统提供的服务程序完成工作。比如前例中fork()实际上就是执行了一个创建新进程的系统调用。")]),v._v(" "),t("li",[v._v("而系统调用的机制其核心还是使用了操作系统为用户特别开放的一个中断来实现，例如Linux的int 80h中断。")])])]),v._v(" "),t("li",[v._v("异常\n"),t("ul",[t("li",[v._v("当CPU在执行运行在用户态下的程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，比如缺页异常。")])])]),v._v(" "),t("li",[v._v("外围设备的中断\n"),t("ul",[t("li",[v._v("当外围设备完成用户请求的操作后，会向CPU发出相应的中断信号，这时CPU会暂停执行下一条即将要执行的指令转而去执行与中断信号对应的处理程序，")]),v._v(" "),t("li",[v._v("如果先前执行的指令是用户态下的程序，那么这个转换的过程自然也就发生了由用户态到内核态的切换。比如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续操作等。")])])])])])]),v._v(" "),t("p",[v._v("这3种方式是系统在运行时由用户态转到内核态的最主要方式，其中系统调用可以认为是用户进程主动发起的，异常和外围设备中断则是被动的。")]),v._v(" "),t("h2",{attrs:{id:"java-中的线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-中的线程模型"}},[v._v("#")]),v._v(" java 中的线程模型")]),v._v(" "),t("p",[v._v("在Java中，基本我们说的线程（Thread）实际上应该叫作“用户线程”，而对应到操作系统，还有另外一种线程叫作“内核线程”。")]),v._v(" "),t("p",[v._v("用户线程和内核线程之间必然存在某种关系，多对一模型、一对一模型和多对多模型")]),v._v(" "),t("h3",{attrs:{id:"多对一线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多对一线程模型"}},[v._v("#")]),v._v(" 多对一线程模型")]),v._v(" "),t("p",[v._v("多个用户线程对应到同一个内核线程上，线程的创建、调度、同步的所有细节全部由进程的用户空间线程库来处理。")]),v._v(" "),t("ul",[t("li",[v._v("优点：\n"),t("ul",[t("li",[v._v("用户线程的很多操作对内核来说都是透明的，不需要用户态和内核态的频繁切换，使线程的创建、调度、同步等非常快；")])])]),v._v(" "),t("li",[v._v("缺点：\n"),t("ul",[t("li",[v._v("由于多个用户线程对应到同一个内核线程，如果其中一个用户线程阻塞，那么该其他用户线程也无法执行；")]),v._v(" "),t("li",[v._v("内核并不知道用户态有哪些线程，无法像内核线程一样实现较完整的调度、优先级等；")])])])]),v._v(" "),t("h3",{attrs:{id:"一对一模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一对一模型"}},[v._v("#")]),v._v(" 一对一模型")]),v._v(" "),t("p",[v._v("即一个用户线程对应一个内核线程，内核负责每个线程的调度")]),v._v(" "),t("ul",[t("li",[v._v("优点：\n"),t("ul",[t("li",[v._v("（比如JVM几乎把所有对线程的操作都交给了内核）实现线程模型的容器（jvm）简单，所以我们经常听到在java中使用线程一定要慎重就是这个原因；")])])]),v._v(" "),t("li",[v._v("缺点：\n"),t("ul",[t("li",[v._v("对用户线程的大部分操作都会映射到内核线程上，引起用户态和内核态的频繁切换；")]),v._v(" "),t("li",[v._v("内核为每个线程都映射调度实体，如果系统出现大量线程，会对系统性能有影响；")])])])]),v._v(" "),t("h3",{attrs:{id:"多对多模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多对多模型"}},[v._v("#")]),v._v(" 多对多模型")]),v._v(" "),t("p",[v._v("太复杂了，不需要了解")]),v._v(" "),t("h2",{attrs:{id:"java-线程切换为什么成本会高-为什么不推荐使用-synchronized-关键词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-线程切换为什么成本会高-为什么不推荐使用-synchronized-关键词"}},[v._v("#")]),v._v(" Java 线程切换为什么成本会高？为什么不推荐使用 synchronized 关键词？")]),v._v(" "),t("p",[v._v("由于Java线程的切换和 synchronized 都是需要用户态到内核态转换的，这个切换非常消耗资源。")]),v._v(" "),t("p",[v._v("应用程序的执行必须依托于内核提供的资源，包括CPU资源、存储资源、I/O资源等。为了使上层应用能够访问到这些资源，内核必须为上层应用提供访问的接口：即系统调用。因此，如果一个程序需要从用户态进入内核态，那么它必须执行系统调用语句。只要发生了系统调用，就会有从用户态到内核态的转换。")]),v._v(" "),t("p",[v._v("Java 中的线程模型为一对一模型（即一个用户线程对应一个内核线程，内核负责每个线程的调度），JVM 几乎把所有对线程的操作都交给了内核，因此肯定会发生用户态到内核态的转换。\nsynchronized 标注的函数会加一个读写锁，加锁解锁也会有内核态与用户态的转换。")]),v._v(" "),t("p",[v._v("当程序中有系统调用语句，程序执行到系统调用时，首先使用类似int 80H的软中断指令，保存现场，去的系统调用号，在内核态执行，然后恢复现场，每个进程都会有两个栈，一个内核态栈和一个用户态栈。当执行int中断执行时就会由用户态，栈转向内核栈。系统调用时需要进行栈的切换。而且内核代码对用户不信任，需要进行额外的检查。系统调用的返回过程有很多额外工作，比如检查是否需要调度等。")]),v._v(" "),t("h3",{attrs:{id:"关于公平锁和非公平锁的加锁流程和区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于公平锁和非公平锁的加锁流程和区别"}},[v._v("#")]),v._v(" 关于公平锁和非公平锁的加锁流程和区别")]),v._v(" "),t("p",[t("img",{attrs:{src:_(385),alt:"image"}})]),v._v(" "),t("h2",{attrs:{id:"wait-notify-和-sleep-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wait-notify-和-sleep-的区别"}},[v._v("#")]),v._v(" Wait, Notify 和 Sleep 的区别")]),v._v(" "),t("p",[v._v("相同：线程的状态相同；都是阻塞状态")]),v._v(" "),t("p",[v._v("区别：")]),v._v(" "),t("ol",[t("li",[v._v("wait是Object的方法；任何对象都可以直接调用；sleep是Thread的静态方法")]),v._v(" "),t("li",[v._v("wait必须配合synchronized关键字一起使用；如果一个对象没有获取到锁直接调用wait会异常；sleep则不需要")]),v._v(" "),t("li",[v._v("wait可以通过notify主动唤醒；sleep只能通过打断主动叫醒")]),v._v(" "),t("li",[v._v("wait会释放锁、sleep在阻塞的阶段是不会释放锁的")])]),v._v(" "),t("h2",{attrs:{id:"jmm-java内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm-java内存模型"}},[v._v("#")]),v._v(" JMM java内存模型")]),v._v(" "),t("h3",{attrs:{id:"关于cpu-内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于cpu-内存"}},[v._v("#")]),v._v(" 关于CPU 内存")]),v._v(" "),t("p",[v._v("CPU、内存、I/O 设备都在不断迭代，在这个快速发展的过程中，有一个核心矛盾一直存在，就是这三者的速度差异。CPU 和内存的速度差异可以形象地描述为：CPU快于内存快于 I/O 设备，程序里大部分语句都要访问内存，有些还要访问 I/O所以程序整体的性能取决于最慢的操作——读写 I/O 设备，也就是说单方面提高 CPU 性能是无效的。")]),v._v(" "),t("p",[v._v("为了合理利用 CPU 的高性能，平衡这三者的速度差异，计算机体系结构、操作系统、编译程序都做出了贡献，主要体现为：CPU 增加了缓存，以均衡与内存的速度差异；操作系统增加了进程、线程，以分时复用 CPU，进而均衡 CPU 与 I/O 设备的速度差异；编译程序优化指令执行次序，使得缓存能够得到更加合理地利用。")]),v._v(" "),t("h3",{attrs:{id:"可见性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可见性问题"}},[v._v("#")]),v._v(" 可见性问题")]),v._v(" "),t("p",[v._v("单核电脑，所有的线程都是在一颗 CPU 上执行，CPU 缓存与内存的数据一致性容易解决。因为所有线程都是操作同一个 CPU 的缓存，一个线程对缓存的写，对另外一个线程来说一定是可见的\n一个线程对共享变量的修改，另外一个线程能够立刻看到，我们称为可见性。")]),v._v(" "),t("p",[v._v("多核时代，每个core都有自己的cache，这时 core的缓存与内存的数据一致性就没那么容易解决了，当多个线程在不同的 core 上执行时，这些线程操作的是不同的 core缓存。比如，线程 A 操作的是core1 上的缓存，而线程 B 操作的是 core2 上的缓存，这个时候线程 A 对变量 x 的操作如果没有及时写回主存，那么对于线程 B 而言就不具备可见性了。")]),v._v(" "),t("h3",{attrs:{id:"线程切换-编译优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程切换-编译优化"}},[v._v("#")]),v._v(" 线程切换——编译优化")]),v._v(" "),t("p",[v._v("重排序可以提高处理的速度。但是编译优化，指令重排会导致有序性问题的发生。参考下面这一章节：为什么定义Java内存模型？")]),v._v(" "),t("h3",{attrs:{id:"java-内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型"}},[v._v("#")]),v._v(" JAVA 内存模型")]),v._v(" "),t("p",[v._v("你已经知道，导致可见性的原因是缓存，导致有序性的原因是编译优化，那解决可见性、有序性最直接的办法就是禁用缓存和编译优化，但是这样问题虽然解决了，我们程序的性能可就堪忧了。合理的方案应该是按需禁用缓存以及编译优化。")]),v._v(" "),t("h4",{attrs:{id:"那么-如何做到-按需禁用-呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那么-如何做到-按需禁用-呢"}},[v._v("#")]),v._v(" 那么，如何做到“按需禁用”呢？")]),v._v(" "),t("p",[v._v("对于并发程序，何时禁用缓存以及编译优化只有程序员知道，那所谓“按需禁用”其实就是指按照程序员的要求来禁用。所以，为了解决可见性和有序性问题，只需要提供给程序员按需禁用缓存和编译优化的方法即可。Java 内存模型是个很复杂的规范，可以从不同的视角来解读，站在我们这些程序员的视角，本质上可以理解为，Java 内存模型规范了 JVM 如何提供按需禁用缓存和编译优化的方法。具体来说，这些方法包括 volatile、synchronized 和 final 三个关键字，以及六项 Happens-Before 规则。")]),v._v(" "),t("h4",{attrs:{id:"为什么定义java内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么定义java内存模型"}},[v._v("#")]),v._v(" 为什么定义Java内存模型？")]),v._v(" "),t("p",[v._v("现代计算机体系大部是采用的对称多处理器的体系架构。每个处理器均有独立的寄存器组和缓存，多个处理器可同时执行同一进程中的不同线程，这里称为处理器的乱序执行。在Java中，不同的线程可能访问同一个共享或共享变量。如果任由编译器或处理器对这些访问进行优化的话，很有可能出现无法想象的问题，这里称为编译器的重排序。除了处理器的乱序执行、编译器的重排序，还有内存系统的重排序。因此Java语言规范引入了Java内存模型，通过定义多项规则对编译器和处理器进行限制，主要是针对可见性和有序性。")]),v._v(" "),t("p",[v._v("Java内存模型涉及的几个关键词：锁、volatile字段、final修饰符与对象的安全发布。其中：")]),v._v(" "),t("ul",[t("li",[v._v("第一是锁，锁操作是具备happens-before关系的，解锁操作happens-before之后对同一把锁的加锁操作。实际上，在解锁的时候，JVM需要强制刷新缓存，使得当前线程所修改的内存对其他线程可见。")]),v._v(" "),t("li",[v._v("第二是volatile字段，volatile字段可以看成是一种不保证原子性的同步但保证可见性的特性，其性能往往是优于锁操作的。但是，频繁地访问 volatile字段也会出现因为不断地强制刷新缓存而影响程序的性能的问题。")]),v._v(" "),t("li",[v._v("第三是final修饰符，final修饰的实例字段则是涉及到新建对象的发布问题。当一个对象包含final修饰的实例字段时，其他线程能够看到已经初始化的final实例字段，这是安全的。")])]),v._v(" "),t("h4",{attrs:{id:"关于java的-happens-before-原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于java的-happens-before-原则"}},[v._v("#")]),v._v(" 关于java的 happens-before 原则")]),v._v(" "),t("ol",[t("li",[v._v("程序次序规则：在一个线程内，按照程序代码顺序，书写在前面的操作 happens-before 书写在后面的操作。准确地说，应该是控制流顺序而不是程序代码顺序，因为要考虑分支、循环等结构；但是这个规则是对结果负责。")]),v._v(" "),t("li",[v._v('一个unlock操作先行发生于后面对同一个锁的lock操作。这里必须强调的是同一个锁，而"后面"是指时间上的先后顺序')]),v._v(" "),t("li",[v._v('volatile变量规则：对一个volatile变量的写操作先行发生于后面对这个变量的读操作，这里的"后 面"同样是指时间上的先后顺序')]),v._v(" "),t("li",[v._v("线程启动规则：Thread对象的start()方法先行发生于此线程的每一个动作")]),v._v(" "),t("li",[v._v("线程终止规则：线程中的所有操作都先行发生于对此线程的终止检测，我们可以通过Thread.join（）方法结束、Thread.isAlive（）的返回值等手段检测到线程已经终止执行")]),v._v(" "),t("li",[v._v("Happens-Before 具备传递性")])])])}),[],!1,null,null,null);a.default=e.exports}}]);