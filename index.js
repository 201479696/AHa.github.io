var element=document.getElementById('Bggray');
function MyBgcolor()
		{
			if (element.style.filter.=="grayscale(100%)")
			{
				element.style.filter="none";
			}
			else
			{
				element.style.filter="grayscale(100%)";
			}
		}