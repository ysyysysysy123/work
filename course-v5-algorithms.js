(function () {
  "use strict";
  const raw = {
    1:["两数之和","two-sum"],3:["无重复字符的最长子串","longest-substring-without-repeating-characters"],15:["三数之和","3sum"],17:["电话号码的字母组合","letter-combinations-of-a-phone-number"],18:["四数之和","4sum"],19:["删除链表的倒数第 N 个结点","remove-nth-node-from-end-of-list"],20:["有效的括号","valid-parentheses"],23:["合并 K 个升序链表","merge-k-sorted-lists"],24:["两两交换链表中的节点","swap-nodes-in-pairs"],27:["移除元素","remove-element"],28:["找出字符串中第一个匹配项的下标","find-the-index-of-the-first-occurrence-in-a-string"],34:["在排序数组中查找元素的第一个和最后一个位置","find-first-and-last-position-of-element-in-sorted-array"],35:["搜索插入位置","search-insert-position"],39:["组合总和","combination-sum"],40:["组合总和 II","combination-sum-ii"],42:["接雨水","trapping-rain-water"],46:["全排列","permutations"],47:["全排列 II","permutations-ii"],53:["最大子数组和","maximum-subarray"],55:["跳跃游戏","jump-game"],56:["合并区间","merge-intervals"],62:["不同路径","unique-paths"],70:["爬楼梯","climbing-stairs"],72:["编辑距离","edit-distance"],76:["最小覆盖子串","minimum-window-substring"],77:["组合","combinations"],78:["子集","subsets"],90:["子集 II","subsets-ii"],98:["验证二叉搜索树","validate-binary-search-tree"],101:["对称二叉树","symmetric-tree"],102:["二叉树的层序遍历","binary-tree-level-order-traversal"],104:["二叉树的最大深度","maximum-depth-of-binary-tree"],105:["从前序与中序遍历序列构造二叉树","construct-binary-tree-from-preorder-and-inorder-traversal"],111:["二叉树的最小深度","minimum-depth-of-binary-tree"],121:["买卖股票的最佳时机","best-time-to-buy-and-sell-stock"],122:["买卖股票的最佳时机 II","best-time-to-buy-and-sell-stock-ii"],124:["二叉树中的最大路径和","binary-tree-maximum-path-sum"],131:["分割回文串","palindrome-partitioning"],134:["加油站","gas-station"],135:["分发糖果","candy"],142:["环形链表 II","linked-list-cycle-ii"],144:["二叉树的前序遍历","binary-tree-preorder-traversal"],146:["LRU 缓存","lru-cache"],151:["反转字符串中的单词","reverse-words-in-a-string"],198:["打家劫舍","house-robber"],200:["岛屿数量","number-of-islands"],203:["移除链表元素","remove-linked-list-elements"],206:["反转链表","reverse-linked-list"],207:["课程表","course-schedule"],209:["长度最小的子数组","minimum-size-subarray-sum"],213:["打家劫舍 II","house-robber-ii"],215:["数组中的第 K 个最大元素","kth-largest-element-in-an-array"],216:["组合总和 III","combination-sum-iii"],225:["用队列实现栈","implement-stack-using-queues"],226:["翻转二叉树","invert-binary-tree"],232:["用栈实现队列","implement-queue-using-stacks"],236:["二叉树的最近公共祖先","lowest-common-ancestor-of-a-binary-tree"],239:["滑动窗口最大值","sliding-window-maximum"],242:["有效的字母异位词","valid-anagram"],257:["二叉树的所有路径","binary-tree-paths"],300:["最长递增子序列","longest-increasing-subsequence"],322:["零钱兑换","coin-change"],344:["反转字符串","reverse-string"],347:["前 K 个高频元素","top-k-frequent-elements"],349:["两个数组的交集","intersection-of-two-arrays"],376:["摆动序列","wiggle-subsequence"],416:["分割等和子集","partition-equal-subset-sum"],435:["无重叠区间","non-overlapping-intervals"],454:["四数相加 II","4sum-ii"],455:["分发饼干","assign-cookies"],474:["一和零","ones-and-zeroes"],494:["目标和","target-sum"],501:["二叉搜索树中的众数","find-mode-in-binary-search-tree"],509:["斐波那契数","fibonacci-number"],518:["零钱兑换 II","coin-change-ii"],530:["二叉搜索树的最小绝对差","minimum-absolute-difference-in-bst"],541:["反转字符串 II","reverse-string-ii"],647:["回文子串","palindromic-substrings"],654:["最大二叉树","maximum-binary-tree"],695:["岛屿的最大面积","max-area-of-island"],700:["二叉搜索树中的搜索","search-in-a-binary-search-tree"],704:["二分查找","binary-search"],707:["设计链表","design-linked-list"],739:["每日温度","daily-temperatures"],746:["使用最小花费爬楼梯","min-cost-climbing-stairs"],797:["所有可能的路径","all-paths-from-source-to-target"],977:["有序数组的平方","squares-of-a-sorted-array"],1047:["删除字符串中的所有相邻重复项","remove-all-adjacent-duplicates-in-string"],1049:["最后一块石头的重量 II","last-stone-weight-ii"],1143:["最长公共子序列","longest-common-subsequence"]
  };
  const catalog = Object.fromEntries(Object.entries(raw).map(([id, item]) => [id, {
    id: Number(id), title: item[0], url: `https://leetcode.cn/problems/${item[1]}/description/`
  }]));
  const normal = (week, focus, pattern, core, review = []) => ({ week, focus, pattern, core: core.map(String), review: review.map(String), mode: "learn", gate: "第一题闭卷 35 分钟内完成；第二题允许看一次提示。两题都要口述复杂度、边界和为什么选这种结构。" });
  const review = (week, focus, ids) => ({ week, focus, pattern: "阶段复习", core: [], review: ids.map(String), mode: "review", gate: "三题随机抽两题闭卷完成，每题 35 分钟；写出错误原因。未通过只复做错题，不增加新题。" });
  const weeks = [
    normal(1,"数组与二分起步","区间定义与循环不变量",[704,27]),
    normal(2,"有序数组与滑动窗口","双指针、窗口扩缩",[977,209],[704]),
    normal(3,"哈希表基础","计数与集合",[242,349],[27]),
    normal(4,"哈希映射与组合计数","补数、分组降低复杂度",[1,454],[209]),
    normal(5,"字符串原地操作","左右指针与分段反转",[344,541],[242]),
    normal(6,"字符串扫描","状态边界与匹配",[151,28],[1]),
    normal(7,"多指针去重","排序、剪枝与去重",[15,18],[344]),
    review(8,"数组、哈希与字符串阶段验收",[704,209,15]),
    normal(9,"链表结构与虚拟头结点","指针改写与哨兵",[203,707],[27]),
    normal(10,"链表反转","局部指针不变量",[206,24],[203]),
    normal(11,"链表双指针","快慢指针与环",[19,142],[206]),
    normal(12,"栈与队列互相模拟","数据结构约束",[232,225],[707]),
    normal(13,"栈处理配对与消除","后进先出",[20,1047],[232]),
    normal(14,"单调队列与堆","窗口最值、Top K",[239,347],[20]),
    normal(15,"二分边界","左边界、右边界",[35,34],[239]),
    review(16,"链表、栈、队列与二分验收",[206,142,239]),
    normal(17,"二叉树遍历","递归、显式栈、层序队列",[144,102],[232]),
    normal(18,"二叉树结构判断","递归返回值与对称比较",[226,101],[102]),
    normal(19,"二叉树深度","自顶向下与自底向上",[104,111],[226]),
    normal(20,"构造二叉树","分割区间与索引映射",[105,654],[104]),
    normal(21,"二叉搜索树性质","中序有序与上下界",[700,98],[101]),
    normal(22,"BST 统计","中序状态与重复值",[530,501],[98]),
    normal(23,"树路径与公共祖先","回溯与后序返回",[257,236],[105]),
    review(24,"二叉树与 BST 阶段验收",[102,98,236]),
    normal(25,"回溯框架起步","选择、递归、撤销",[77,216],[257]),
    normal(26,"组合搜索","树层与树枝",[17,39],[77]),
    normal(27,"去重与切割","排序去重、切割位置",[40,131],[39]),
    normal(28,"子集与排列","收集节点、used 数组",[78,46],[17]),
    normal(29,"重复元素回溯","同层去重",[90,47],[78]),
    normal(30,"网格 DFS/BFS","连通分量与访问标记",[200,695],[131]),
    normal(31,"图遍历与拓扑排序","邻接表、入度与环",[797,207],[200]),
    review(32,"回溯与图阶段验收",[39,200,207]),
    normal(33,"贪心起步","局部选择与可证明性",[455,376],[77]),
    normal(34,"贪心状态维护","连续贡献与可达范围",[53,55],[455]),
    normal(35,"区间问题","排序后合并或移除",[56,435],[53]),
    normal(36,"贪心全局约束","环形起点与双向遍历",[134,135],[56]),
    normal(37,"动态规划起步","状态、转移、初始化",[509,70],[55]),
    normal(38,"二维路径 DP","滚动状态与边界",[746,62],[70]),
    normal(39,"0/1 背包","容量倒序与布尔状态",[416,1049],[62]),
    review(40,"贪心与 DP 基础验收",[55,62,416]),
    normal(41,"0/1 背包计数","加减转换与二维容量",[494,474],[1049]),
    normal(42,"完全背包","组合数、最少数量",[322,518],[416]),
    normal(43,"序列 DP","子序列状态与转移",[300,1143],[322]),
    normal(44,"字符串 DP","编辑操作与中心扩展",[72,647],[1143]),
    normal(45,"打家劫舍系列","相邻约束与环形拆分",[198,213],[300]),
    normal(46,"股票状态","持有/不持有与交易次数",[121,122],[198]),
    normal(47,"单调栈","下一个更大与蓄水边界",[739,42],[647]),
    review(48,"DP 与单调结构阶段验收",[322,300,42]),
    normal(49,"堆与多路归并","Top K、优先队列",[215,23],[347]),
    normal(50,"面试编码设计","哈希+双链表、滑动窗口",[146,3],[206]),
    normal(51,"高频综合难题","窗口计数、树形后序 DP",[76,124],[146]),
    review(52,"年度算法验收",[15,146,124])
  ];
  window.ALGORITHM_PLAN_V5 = {
    version: "5.0",
    source: { name: "代码随想录算法路线", url: "https://programmercarl.com/algo/", note: "采用其循序渐进的专题顺序，题目落到力扣中文版；不采用每日高强度打卡。" },
    load: "普通周两道核心题 + 一道间隔复习，1.5–2h；验收周不学新题，只闭卷抽题。",
    evidence: "每题保留首次解法、失败原因、复杂度和一次无提示复做日期。",
    catalog,
    weeks
  };
})();
