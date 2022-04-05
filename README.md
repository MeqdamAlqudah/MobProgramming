# MobProgramming

Problem :
HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5  people on social media.

On the first day, half of those  people (i.e., ) like the advertisement and each shares it with  3 of their friends. At the beginning of the second day, floor(5/2) * 3 = 2*3 =6 people receive the advertisement.

Each day, floor((recipients)/2) of the recipients like the advertisement and will share it with 3 friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.

Example
n = 5

| Day| Shared | Liked | Cumulative|
|----|--------|-------|-----------|
| 1  |    5   |  2    |   2       |
| 2  |    6   |  3    |   5        
| 3  |    9   |  4    |   9
| 4  |   12   |  6    |  15
| 5  |   18   |  9    |  24

so at day 5 the answer would be 24

[link to the problem on hacker rank](https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true)
