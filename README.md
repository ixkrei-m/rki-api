# RKI-API

This API provides JSON Data indirecly from Robert Koch-Institute through the API from [Marlon Lückert](https://github.com/marlon360/rki-covid-api)

## Endpoint

`https://corona.maximilianhaindl.de/api/general`  
The Endpoint is being rate-limited to 5 requests per minute

### Reply Structure

```
{
  rep: {
    generals: [
      {
        cases: number,
        createdAt: string,
        dailyCases: number,
        dailyDeaths: number,
        dailyRecovered: number,
        date: string,
        deaths: number,
        id: number,
        lastUpdate: string,
        recovered: number,
        updatedAt: string
      }
    ]
  }
}
```
