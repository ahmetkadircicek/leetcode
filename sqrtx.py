class Solution(object):
    def mySqrt(self, x):
        for i in range(x+1):
            if i*i > x:
                return i-1
            elif i*i == x:
                return i