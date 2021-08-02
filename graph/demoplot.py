import sys,json
from graphplot import graph
import pandas as pd

data = sys.stdin.readlines()
data = json.loads(data[0])
df =pd.read_csv('C:/Users/91766/Desktop/Stock Analysis/graph/ACC.csv')
df['Date']=pd.to_datetime(df['Date'])
df=df.head(50)
df=df.rename(columns={'Date':'d','Open Price':'o',
                            'High Price':'h',
                            'Low Price':'l',
                            'Close Price':'c'})
print(data)
sys.stdout.flush()
graph(df,data," "," ")


